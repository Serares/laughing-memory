import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { getData } from '../service/fetchService';
import { endpoints } from '../util/endpoints';
import AddEstate from './main/AddEstate';
import EstateBoard from './main/EstateBoard';
import Dashboard from './main/Dashboard';
import Pending from './main/Pending';
import { SideDrawer } from '../components/SideDrawer/SideDrawer';
import { SERVER_API_URL } from '../util/secrets';
import { IMainProps } from '../interfaces/main/IMainProps';
import { IEstate } from '../interfaces/main/IProperties';
import { PropertiesGetResponse } from '../interfaces/ResponseObjects';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    appBarSpacer: theme.mixins.toolbar
}));

const Main = (props: IMainProps) => {
    const { isAuth } = props;
    const classes = useStyles();
    const [estateList, setEstateList] = useState<Array<IEstate>>([]);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(true);
    const [estateFormDataFields, setEstateFormDataFields] = useState({});

    useEffect(() => {
        if (isAuth) {
            getData<PropertiesGetResponse>(SERVER_API_URL + "" + endpoints["GET_PROPERTIES"])
                .then((data) => {
                    console.log("Estate data", data["message"]);
                    setEstateList(data["properties"]);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [isAuth])

    //TODO i think this should be moved to globalStore?
    /*
    function sendDataToBackend(formData, isChangingProperty) {
        //TODO get rid of this postURL and add it to the global store
        let endpointUrl = domainUrl + "" + (isChangingProperty ? endpoints.CHANGE_PROPERTY : endpoints.ADD_PROPERTY);
        let METHOD = isChangingProperty ? "PUT" : "POST";

        console.log("Inputs", formData);
        let data = new FormData(formData);
        let valueCaracteristici = JSON.stringify(caracteristiciData);
        let valueSpecificatii = JSON.stringify(specificatiiData);
        data.append("caracteristici", valueCaracteristici);
        data.append("specificatii", valueSpecificatii);
        isChangingProperty && data.append('deletedImages', JSON.stringify(deletedImages));
        // for (let field of data) {
        //   console.log(field);
        // }

        fetch(endpointUrl, {
            method: METHOD,
            body: data
        })
            .then(res => {
                console.log(res);
                if (res.status != 200 && res.status != 201) {
                    throw new Error('Failed request');
                }
                return res.json();
            })
            .then(responseData => {
                setDeletedImages([]);
                // in case property modified
                if (isChangingProperty) {
                    setIsPropertyEdit(false);
                }
                setModalInfo({
                    message: "Succes",
                    title: "Proprietatea modificata/adaugata cu succes",
                    showModal: true,
                    warning: true
                })
                console.log(responseData);
            })
            .catch(err => {
                console.log(err);
                setModalInfo({
                    message: "Eroare",
                    title: "Eroare la adaugarea/modificarea proprietatii",
                    showModal: true,
                    warning: true
                })
            })
    }
*/
    const handleDrawerToggle = (): void => {
        setDrawerOpen(!drawerOpen);
    };

    // function generateContactPersons(accounts) {
    //     accounts = [
    //         {
    //             "firstName": "Ionik",
    //             "lastName": "Vlady",
    //             "_id": "OhVladdyyy"
    //         }
    //     ]
    //     // TODO get the admins accounts from DB
    //     // {display: "firstName + lastName", value: userID}
    //     let newFormData = { ...estateFormDataFields };
    //     let arrayOfContacts = [];
    //     arrayOfContacts = accounts.map((acc, index) => {
    //         return {
    //             display: `${acc["firstName"]} ${acc["lastName"]}`,
    //             value: acc["_id"]
    //         }
    //     })
    //     newFormData["persoanaContact"]["config"]["options"] = arrayOfContacts;
    //     setEstateFormDataFields(newFormData);
    // };

    const renderRoutes = () => {
        let routes = (
            <>
            </>
        );
        routes = (
            <>
                <Route
                    path={"/admin"}
                    exact
                    render={(p) => (
                        <Dashboard />)}
                />
                <Route
                    path={"/admin/estate-board"}
                    exact
                    render={(p) => (
                        <EstateBoard
                            {...p}
                            estateList={estateList}
                        />)}
                />
                <Route
                    path={"/admin/add-estate"}
                    exact
                    render={(p) => (
                        <AddEstate
                            sendDataToBackend={() => { alert("Sending data to BE") }}
                        />)}
                />
                <Route
                    path={"/admin/pending"}
                    exact
                    render={(p) => (
                        <Pending />)}
                />
                <Route
                    path={"/admin/users"}
                    exact
                    render={(p) => (
                        <Pending />)}
                />
                <Redirect to="/admin" />
            </>
        );
        return routes;
    }

    return (
        <>
            <div className={classes.root}>
                <CssBaseline />

                <SideDrawer
                    handleDrawerToggle={handleDrawerToggle}
                    open={drawerOpen}
                />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Switch>
                            {renderRoutes()}
                        </Switch>
                    </Container>
                </main>
            </div>
        </>
    )
}


export default Main;