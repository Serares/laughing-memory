import { IFormModel } from "./IFormModel";
import { TForm } from "./TForm";
import { Basic, ImagesInput, MapInput, TextArea } from "../inputs";
import { EHTMLTypes } from "../EHTMLTypes";

export abstract class AbstractFormModel implements IFormModel {
    titlu = new Basic("", "Titlu", EHTMLTypes.TEXT, "Titlu", "titlu", "titlu");
    imagini = new ImagesInput("", "Adauga Imagini");
    locatie = new MapInput("", "Adauga localizarea", { lat: 0, lng: 0 });
    descriere = new TextArea("", "Descriere proprietate", EHTMLTypes.TEXTAREA, "descriere", "descriere");

    constructor() {
    }

    generateFormFields(): TForm {
        throw new Error("Method not implemented.");
    }
}
