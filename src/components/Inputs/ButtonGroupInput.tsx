import React from 'react';
import { EHTMLTypes } from '../../models';
import { IItems } from '../../models/inputs';

export interface buttonGroupProps {
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

// TODO try to add the button group
export const ButtonGroupInput = (props: buttonGroupProps) => {
    return (
        <div>Input group buttons</div>
    )
}