import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import EstateCard from '../../components/EstateCard/EstateCard';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

// @ts-ignore
const EstateBoard = (props) => {
    let { estateList } = props;
    let modal_data = {
        message: "",
        title: "",
        showModal: false
    };

    let property_delete_data = {
        _id: "",
        index_number: ""
    };

    let [dbProperties, setDbProperties] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [modalInfo, setModalInfo] = useState(modal_data);
    let [propertyForDeletion, setPropertyForDeletion] = useState(property_delete_data);
    let [isComponentRendered, setIsComponentRendered] = useState(false);
    // @ts-ignore
    function createEstateRows(estateList) {
        if (!estateList) {
            return "Problem fetching properties"
        };

        if (estateList.length < 1) {
            return "There are no properties in here"
        };
        // @ts-ignore
        const elements = estateList.map((elem, index) => {
            return <EstateCard
                key={elem._id}
                property={elem}
                propertyIndex={index}
            />
        });
        return elements;
    };

    return (
        <Grid container direction="column" spacing={3}>
            {/* Search property <input type="text" /> */}
            {isLoading ?
                <LoadingIndicator /> :
                createEstateRows(estateList)
            }
        </Grid>
    )
}


export default EstateBoard;
