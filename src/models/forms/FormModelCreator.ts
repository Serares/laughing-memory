import { EEstateTypes } from "../EEstateTypes";
import { TForm, CasaFormModel, ApartamentFormModel } from "./index";

export class FormModelCreator {
    constructor() {
    }

    public generateForm(type: EEstateTypes): TForm {
        switch (type) {
            case (EEstateTypes.APARTAMENT):
                return new ApartamentFormModel().generateFormFields();
            case (EEstateTypes.CASA):
                return new CasaFormModel().generateFormFields();
            case (EEstateTypes.TEREN):
                return new ApartamentFormModel().generateFormFields();
            case (EEstateTypes.COMERCIAL):
                return new ApartamentFormModel().generateFormFields();
            default:
                return new ApartamentFormModel().generateFormFields();
        }
    }
}