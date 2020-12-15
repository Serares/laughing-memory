import React, { useState, useEffect } from 'react';
import { Form, Col } from '../Inputs/InputImage/node_modules/react-bootstrap';
import Specificatii from './Specificatii';
import Caracteristici from './Caracteristici';
import ImagesInputs from '../Inputs/InputImage/InputImage';
import LeafletMap from '../Inputs/Map';
import TextField from "@material-ui/core/TextField";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from "@material-ui/core/Grid";
import Select from '@material-ui/core/Select';
import TextAreaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

const Input = (props) => {
    const classes = useStyles();

    let value = props.inputValue;
    const inputName = props.inputName;
    const config = props.inputConfig;
    const element = props.inputElement;
    let [inputValue, setInputValue] = useState();
    let inputInfo = props.inputInfo;
    useEffect(() => {
        setInputValue(value)
    }, [value]);

    let input;
    switch (element) {
        case ('input'):
            input = (
                <Grid item xs={12} sm={12}>
                    <TextField
                        label="None"
                        id="margin-none"
                        defaultValue={inputName}
                        className={classes.textField}
                        helperText={inputInfo}
                        value={inputValue}
                        onChange={(e) => { props.change(e, inputName) }}
                    />
                </Grid>
                // <Form.Row>
                //     <Form.Group as={Col}>
                //         <Form.Label>{inputName}</Form.Label>
                //         <Form.Text className="text-muted">
                //             {inputInfo}
                //         </Form.Text>
                //         <Form.Control as={element} onChange={(e) => { props.change(e, inputName) }} {...config} value={inputValue} />
                //     </Form.Group>
                // </Form.Row>
            );
            break;
        case ('select'):
            console.log("Select configs", inputName, config);
            // TODO create separate inputs components for each switch case
            input = (
                <FormControl className={classes.formControl}>
                    <InputLabel id="simple-select-helper-label">{inputName}</InputLabel>
                    <Select
                        labelId="simple-select-helper-label"
                        id="simple-select-helper"
                        value={inputValue}
                        onChange={(e) => { props.change(e, inputName) }}
                    >
                        {config.options.length && config.options.map((option, index) => {
                            return <MenuItem key={option["value"]} value={option["value"]}>{option["display"]}</MenuItem>
                        })}
                    </Select>
                    <FormHelperText>{inputInfo}</FormHelperText>
                </FormControl>
                // <Form.Row>
                //     <Form.Group as={Col}>
                //         <Form.Label>{inputName}</Form.Label>
                //         <Form.Text className="text-muted">
                //             {inputInfo}
                //         </Form.Text>
                //         <Form.Control value={inputValue} as={element} onChange={(e) => { props.change(e, inputName) }} type={config.type} placeholder={config.placeholder} id={inputName} name={inputName}>
                //             {config.options.map((option, index) => {
                //                 return <option key={option["value"]} value={option["value"]}>{option["display"]}</option>
                //             })}
                //         </Form.Control>
                //     </Form.Group>
                // </Form.Row>
            );
            break;
        case ('textarea'):
            input = (
                <FormControl className={classes.formControl}>
                    <InputLabel className="simple-select-helper-label">{inputName}</InputLabel>
                    <TextAreaAutosize
                        onChange={(e) => { props.change(e, inputName) }}
                        {...config}
                        rowsMax={3}
                    />
                </FormControl>
                // <Form.Row>
                //     <Form.Group as={Col}>
                //         <Form.Label>{inputName}</Form.Label>
                //         <Form.Control as={element} onChange={(e) => { props.change(e, inputName) }} rows="3" {...config} value={inputValue} />
                //     </Form.Group>
                // </Form.Row>
            );
            break;
            // TODO separate those inputs from the simple inputs
        // case ('caracteristici'):
        //     input = (
        //         <Caracteristici caracteristici_data={inputValue} />
        //     );
        //     break;
        // case ('specificatii'):
        //     input = <Specificatii specificatii_data={inputValue} onchange={props.change} />
        //     break;
        // case ('inputFiles'):
        //     input = (
        //         <ImagesInputs images_data={inputValue} config={config} />
        //     );
        //     break;
        // case ('location'):
        //     input = (
        //         <div>
        //             <h2>Adaugă locația proprietății pe hartă</h2>
        //             <LeafletMap data={props.inputValue} />
        //         </div>
        //     );
        //     break;
        default:
            input = "Default input";
            break;
    }

    return input;
}

export default Input;
