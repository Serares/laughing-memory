import React, { useState } from 'react';
import EstateFormBuilder from '../../components/EstateForms/EstateFormBuilder';
import RadioCustom from '../../components/Inputs/RadioCustom/RadioCustom';
import Grid from "@material-ui/core/Grid";
import { EEstateTypes } from "../../models/EEstateTypes";
import { ETransactionType } from '../../models';

export interface IAddEstateProps {
    sendDataToBackend(arg1: EventTarget): void;
};

/**
 * Add estate page
 */
function AddEstate(props: IAddEstateProps) {
    const [selectedEstate, setSelectedEstate] = useState<EEstateTypes>(EEstateTypes.CASA);
    const [selectedTransation, setSelectedTransaction] = useState<ETransactionType>(ETransactionType.CUMPARARE);

    // TODO create estate forms for each type as jsx elements and just change them based on selected estate
    function sendingData(e: React.FormEvent) {
        e.preventDefault();
        // TODO get the data from the input fields, add them in json format and send them to the server, figure out how to send the images to the server
        console.log("Clicked send data button");
        // get all the data and add it to fields
    };

    const changeEstateTypeHandler = (value: EEstateTypes) => {
        setSelectedEstate(value);
    };

    const changeTransactionType = (value: ETransactionType) => {
        setSelectedTransaction(value);
    }

    return (
        <div className="add-property">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <RadioCustom
                        changeHandler={changeEstateTypeHandler}
                        itemsSelection={Object.values(EEstateTypes)}
                        selectedItem={selectedEstate}
                    />
                </Grid>
                <Grid item xs={12}>
                    <RadioCustom
                        changeHandler={changeTransactionType}
                        itemsSelection={Object.values(ETransactionType)}
                        selectedItem={selectedTransation}
                    />
                </Grid>
                <Grid item xs={12}>
                    <EstateFormBuilder
                        isEdit={false}
                        estateType={selectedEstate}
                    />
                </Grid>
            </Grid>
        </div>
    )
};

export default AddEstate;