import React, { useState, useEffect, useContext } from 'react';
import { ButtonGroup, Grid, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import { EEstateTypes } from "../../models/EEstateTypes";
import { TForm, FormModelCreator } from '../../models/forms';
import { IInputModel } from '../../models/inputs';
import { Basic, SelectInput, TextArea, InputImage, LeafletMap } from '../Inputs';
import { EJSXTypes } from '../../models';

export interface IEstateFormBuilderProps {
    isEdit: boolean;
    estateType: EEstateTypes
};

/**
 * EstateFormBuilder manages the form data
 * this will dynamically render the fields from a model
 * -> Data from here will be passed to AddEstate/ModifyEstate
 * -> title, localization and images inputs are common for all estate types
 */
const EstateFormBuilder = (props: IEstateFormBuilderProps) => {
    const formModelCreator = new FormModelCreator();
    const [estateFormModel, setEstateFormModel] = useState<TForm>(formModelCreator.generateForm(props.estateType));

    useEffect(() => {
        changeEstateForm(props.estateType);
    }, [props.estateType]);

    function generateStateFieldsFromModel() {
        let objectLiteral: { [key: string]: string } = {};

        Object.keys(estateFormModel).map((item, index) => {
            objectLiteral[item] = "";
        })
        return objectLiteral;
    };

    const formik = useFormik({
        initialValues: generateStateFieldsFromModel(),
        validationSchema: null,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const renderInputs = (model: TForm) => {
        return Object.keys(model).map((inputName, index) => {
            let inputModel = model[inputName];
            return renderJSXInput(inputModel, inputName);
        });
    };

    const renderJSXInput = (inputModel: IInputModel, inputName: string) => {
        let jsxElement;
        switch (inputModel.jsxType) {
            case (EJSXTypes.BASIC):
                jsxElement = (
                    <Basic
                        key={inputName}
                        id={inputModel["id"]}
                        name={inputModel["name"]}
                        label={inputModel["label"]}
                        value={formik.values[inputName]}
                        type={inputModel["htmlType"]}
                        //@ts-ignore
                        handleChange={formik.handleChange}
                        error={formik.touched[inputName] && Boolean(formik.errors[inputName])}
                        //@ts-ignore
                        helperText={formik.touched[inputName] && formik.errors[inputName]}
                    />);
                break;
            case (EJSXTypes.SELECT):
                jsxElement = (
                    <SelectInput
                        key={inputName}
                        items={inputModel["items"]}
                        id={inputModel["id"]}
                        name={inputModel["name"]}
                        placeholder={inputModel["placeholder"]}
                        label={inputModel["label"]}
                        value={formik.values[inputName]}
                        type={inputModel["htmlType"]}
                        //@ts-ignore
                        handleChange={formik.handleChange}
                        error={formik.touched[inputName] && Boolean(formik.errors[inputName])}
                        //@ts-ignore
                        helperText={formik.touched[inputName] && formik.errors[inputName]}
                    />);
                break;
            case (EJSXTypes.TEXTFIELD):
                jsxElement = (
                    <TextArea
                        key={inputName}
                        id={inputModel["id"]}
                        name={inputModel["name"]}
                        placeholder={inputModel["placeholder"]}
                        value={formik.values[inputName]}
                        type={inputModel["htmlType"]}
                        //@ts-ignore
                        handleChange={formik.handleChange}
                        error={formik.touched[inputName] && Boolean(formik.errors[inputName])}
                        //@ts-ignore
                        helperText={formik.touched[inputName] && formik.errors[inputName]}
                    />);
                break;
            case (EJSXTypes.IMAGE):
                jsxElement = (
                    <InputImage
                    />);
                break;
            case (EJSXTypes.MAP):
                jsxElement = (
                    <LeafletMap
                    />);
                break;
            default:
                jsxElement = <div key={"basic"}>Input</div>
                break;
        };

        return jsxElement;
    }

    const changeEstateForm = (type: EEstateTypes) => {
        let formModel: TForm;
        formModel = formModelCreator.generateForm(type);
        setEstateFormModel(formModel);
    };

    // function getDataFromInput(e, inputName) {
    //     const updatedForm = { ...formInputs };
    //     const updatedElementForm = { ...updatedForm[inputName] };

    //     updatedElementForm.value = e.target.value;
    //     updatedForm[inputName] = updatedElementForm;
    //     setFormInputs(updatedForm);
    // };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                {props.isEdit ? "Modifica proprietatea" : "Adauga Proprietate"}
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    {renderInputs(estateFormModel)}
                </Grid>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}


export default EstateFormBuilder;