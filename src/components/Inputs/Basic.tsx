import React from 'react';
import { Box, TextField, Grid } from "@material-ui/core";
import { EHTMLTypes } from '../../models';

/**
 * This can be number or text
 */
export interface basicProps {
    id: string;
    name?: string;
    label?: string;
    placeholder: string;
    value: string;
    handleChange: React.ChangeEvent;
    touched: boolean;
    helperText: string;
    type: EHTMLTypes | undefined;
    error: boolean | undefined;
};

export const Basic = (props: basicProps) => {
    const { type, id, name, label, value, handleChange, error, helperText } = props;
    return (
        <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                id={id}
                name={name}
                label={label}
                type={type}
                value={value}
                //@ts-ignore
                onChange={handleChange}
                error={error}
                helperText={helperText}
                variant="outlined"
            />
        </Grid>
    )
}