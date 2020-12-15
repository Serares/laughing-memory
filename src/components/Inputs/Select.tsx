import React from 'react';
import {
    Select,
    MenuItem,
    Grid,
    FormControl,
    InputLabel,
    FormHelperText,
    makeStyles,
    createStyles,
    Theme
} from '@material-ui/core';

import { EHTMLTypes } from '../../models';
import { IItems } from '../../models/inputs';

export interface selectProps {
    id: string;
    name?: string;
    label?: string;
    placeholder: string;
    value: string;
    handleChange: React.ChangeEvent;
    touched: boolean;
    helperText: string;
    type?: EHTMLTypes | undefined;
    error: boolean | undefined;
    items?: IItems[];
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export const SelectInput = (props: selectProps) => {
    const { type, id, name, label, value, handleChange, error, helperText, items, placeholder } = props;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id={`${id}-label`} >{label}</InputLabel>
                <Select
                    labelId={`${id}-label`}
                    id={id}
                    value={value}
                    name={name}
                    //@ts-ignore
                    onChange={handleChange}
                    label={label}
                >
                    {items?.map((item, index) => {
                        return (<MenuItem value={Number(item["value"])} key={index}>{item["label"]}</MenuItem>)
                    })}
                </Select>
                <FormHelperText>{placeholder}</FormHelperText>
            </FormControl>

        </Grid>
    )
}