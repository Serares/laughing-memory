import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { EEstateTypes } from '../../models/EEstateTypes';

export interface ISelectEstateProps {
    changeHandler(arg1: EEstateTypes): void;
    selectedEstate: EEstateTypes;
};

const SelectEstate = (props: ISelectEstateProps) => {
    let { changeHandler, selectedEstate } = props;

    function createRadioButtons(): JSX.Element[] {
        return Object.values(EEstateTypes).map((item, key) => {
            return (<FormControlLabel
                value={item}
                control={<Radio color="primary" />}
                label={item}
                labelPlacement="top"
                onChange={() => { changeHandler(item) }}
                key={key}
            />)
        })
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup row aria-label="position" name="position" value={selectedEstate}>
                {createRadioButtons()}
            </RadioGroup>
        </FormControl>
    )
}

export default SelectEstate;