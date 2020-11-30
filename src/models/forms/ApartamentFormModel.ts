import { IItems } from '../inputs/IInput';
import { TForm } from './TForm';
import { ButtonGroup } from '../inputs/ButtonGroup';
import { Basic } from '../inputs/Basic';
import { EHTMLTypes } from '../EHTMLTypes';
import { Select } from '../inputs/Select';
import { TextArea } from '../inputs/TextArea';
import {
    camere as camereItems,
    compartimentare as compItems,
    etaje as etajItems,
    confort as confortItems,
    anConstructie as anConstructieItems,
    tipImobil as tipImobilItems,
    stadiuConstructie as stadiuConstructieItems
} from '../config/index';
import { AbstractFormModel } from './AbstractFormModel';

/**
* TODO create a form factory that returns forms like this one
* so you can give the strings as parameters and not hard code them in here
**/
export class ApartamentFormModel extends AbstractFormModel {
    // TODO add the estate type
    private camere: Select;
    private bai: Basic;
    private suprafataUtila: Basic;
    private pret: Basic;
    private compartimentare: Select;
    private confort: Select;
    private etaj: Select;
    private anConstructie: Select;
    private anFinalizare: Basic;
    private stadiuConstructie: Select;
    private tipImobil: Select;

    /** state variables */
    private camereItems: IItems[] = camereItems;
    private etajItems: IItems[] = etajItems;
    private compItems: IItems[] = compItems;
    private confortItems: IItems[] = confortItems;
    private anConstrictieItems: IItems[] = anConstructieItems;
    private tipImobilItems: IItems[] = tipImobilItems;
    private stadiuConstructieItems: IItems[] = stadiuConstructieItems;

    constructor() {
        super();
        // TODO make camere button group
        // TODO think how to make inputs appear conditionally
        this.camere = new Select("", this.camereItems, "Nr. Camere", EHTMLTypes.SLECT, "camere", "camere");
        this.bai = new Basic("", "Nr. Bai", EHTMLTypes.NUMBER, "Nr. Bai", "bai", "bai");
        this.suprafataUtila = new Basic("", "mp", EHTMLTypes.NUMBER, "Suprafata Utila", "suprafataUtila", "suprafataUtila");
        this.pret = new Basic("", "Pret", EHTMLTypes.NUMBER, "Pret", "pret", "pret");
        this.compartimentare = new Select("", this.compItems, "Compartimentare", EHTMLTypes.SLECT, "compartimentare", "compartimentare");
        this.confort = new Select("", this.confortItems, "Confort", EHTMLTypes.SLECT, "confort", "confort");
        this.etaj = new Select("", this.etajItems, "Etaj", EHTMLTypes.SLECT, "etaj", "etaj");
        this.anFinalizare = new Basic("", "An Finalizare", EHTMLTypes.NUMBER, "An Finalizare", "anFinalizare", "anFinalizare");
        this.stadiuConstructie = new Select("", this.stadiuConstructieItems, "Stadiu Constructie", EHTMLTypes.SLECT, "stadiuConstructie", "stadiuConstructie");
        this.tipImobil = new Select("", this.tipImobilItems, "Tip Imobil", EHTMLTypes.SLECT, "tipImobil", "tipImobil");
        this.anConstructie = new Select("", this.anConstrictieItems, "An Constructie", EHTMLTypes.SLECT, "anConstructie", "anConstructie");
    }

    public generateFormFields(): TForm {
        return {
            titlu: this.titlu.generate(),
            camere: this.camere.generate(),
            bai: this.bai.generate(),
            compartimentare: this.compartimentare.generate(),
            suprafata: this.suprafataUtila.generate(),
            pret: this.pret.generate(),
            locatie: this.locatie.generate(),
            confort: this.confort.generate(),
            etaj: this.etaj.generate(),
            anConstructie: this.anConstructie.generate(),
            anFinalizare: this.anFinalizare.generate(),
            stadiuConstructie: this.stadiuConstructie.generate(),
            tipImobil: this.tipImobil.generate(),
            descriere: this.descriere.generate()
            // TODO add locatie and imagini

        }
    }
}