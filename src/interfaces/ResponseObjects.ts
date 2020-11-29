import { IEstate } from './main/IProperties';

export type PropertiesGetResponse = {
    message: string;
    properties: IEstate[];
}

export type ResponseError = {
    errorNumber: string;
    errorMessage: string;
}
