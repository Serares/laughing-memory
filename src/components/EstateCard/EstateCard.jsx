import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from "@material-ui/core/Button";
import '../UI/carousel.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
    },
    image: {
        width: 200,
        height: 200,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const EstateCard = (props) => {
    let { property, redirectToChangeProperty, propertyIndex, deleteProperty } = props;
    let images = property.imagini;
    // TODO move those arrays in a separate js file
    let tipuriProprietate = [{ display: "Casa", value: "1" }, { display: "Apartament", value: "2" }, { display: "Garsoniera", value: "3" }, { display: "Vila", value: "4" }, { display: "Teren", value: "5" }, { display: "Birouri", value: "6" }, { display: "Proprietate Speciala", value: "7" }];
    let statusProprietate = [{ display: "Vanzare", value: "1" }, { display: "Inchiriere", value: "2" }];
    const classes = useStyles();

    // let [loadedImages, setLoadedImages] = useState([]);
    // let [imagesLoaded, setIsImagesLoaded] = useState(false);

    //TODO make a image loading functionality
    // let loadImage = (imageSrc, index) => {

    //     return new Promise((resolve, reject) => {
    //         let imageElement = document.createElement('image');
    //         imageElement.src = imageSrc;
    //         imageElement.onload = () => {
    //             resolve(imageElement);
    //         }
    //         imageElement.onerror = () => {
    //             reject("Error loading image")
    //         }

    //     })

    // }

    // let imageElem = (src, index) => {
    //     let image;
    //     loadImage(src, index)
    //         .then(imageElement => {
    //             image = imageElement;
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //     return image;
    // }

    // let loadAllImages = () => {
    //     let imagesNo = images.length;
    //     let imageElementsArray = [];
    //     for (let src of images) {

    //     }
    // }


    function displayPropertyCaracteristics() {

        let chars = property.caracteristici.map((caracteristica, index) => {
            return (<ul key={index} className={'caracterisitca' + index}>
                <li>{caracteristica.key}</li>
                <li>{caracteristica.value}</li>
            </ul>)
        })
        return chars;
    }

    function displayPropertySpecifications() {
        try {
            return property.specificatii.map((spec, index) => {

                return (
                    <div key={"spec-title" + index}>
                        <p>{spec.name}</p>
                        <ul>
                            {spec.specs.map((spec_item, index) => {
                                return <li key={spec_item + " " + index}>
                                    {spec_item}
                                </li>
                            })}
                        </ul>
                    </div>
                )
            })
        } catch (err) {
            console.log("Eroare", err, property);
            return "";
        }

    }

    const changeHandler = () => {
        // setPropertyDetails(property);
        redirectToChangeProperty(property._id, propertyIndex);
    }

    const deleteHandler = () => {
        deleteProperty(property._id, propertyIndex);
    }

    const displayPropertyType = function (propertyType) {
        let displayValue = "";
        tipuriProprietate.forEach(type => {
            if (+type.value === propertyType) {
                displayValue = type.display;
            }
        });

        return displayValue;
    }

    const statusProperty = (propertyStatus) => {
        let displayValue = "";
        statusProprietate.forEach(status => {
            if (+status.value === propertyStatus) {
                displayValue = status.display;
            }
        });

        return displayValue;
    }
    return (
        <Grid item>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="/" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {property.titlu}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {property.adresa}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        ID: 1030114
                                </Typography>
                                </Grid>
                                {/* TODO move to buttons at the end of the card */}
                                <Grid container direction="row" spacing={3}>
                                    <Grid item>
                                        <Button variant="contained" color="secondary">
                                            Sterge
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" style={{ backgroundColor: "yellow" }}>
                                            Modifica
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">{property.pret}€</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </Grid>
    )

}

export default EstateCard;