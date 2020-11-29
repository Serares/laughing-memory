import React from 'react';
import { TextField } from "@material-ui/core";
import { EHTMLTypes } from '../../models';

export interface textAreaProps {
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
};

export const TextArea = (props: textAreaProps) => {
    const { id, value, name, type, handleChange, placeholder, error, helperText } = props;

    return (
        <TextField
            id={id}
            label={placeholder}
            multiline
            rows={6}
            defaultValue="Default Value"
            value={value}
            name={name}
            type={type}
            variant="outlined"
            error={error}
            helperText={helperText}
            //@ts-ignore
            onChange={handleChange}
        />
    )
}