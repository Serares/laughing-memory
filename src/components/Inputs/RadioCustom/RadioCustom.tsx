import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { EEstateTypes } from '../../../models';
import { ETransactionType } from '../../../models';

export interface IRadioCustomProps {
    changeHandler(arg1: EEstateTypes | ETransactionType): void;
    itemsSelection: Array<EEstateTypes | ETransactionType>;
    selectedItem: EEstateTypes | ETransactionType;
};

const RadioCustom = (props: IRadioCustomProps) => {
    let { changeHandler, itemsSelection, selectedItem } = props;

    function createRadioButtons(): JSX.Element[] {
        return itemsSelection.map((item, key) => {
            return (<FormControlLabel
                value={item}
                control={<Radio color="primary" />}
                label={item}
                labelPlacement="top"
                onChange={() => {
                    changeHandler(item)
                }}
                key={key}
            />)
        })
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup row aria-label="position" name="position" value={selectedItem}>
                {createRadioButtons()}
            </RadioGroup>
        </FormControl>
    )
}

export default RadioCustom;