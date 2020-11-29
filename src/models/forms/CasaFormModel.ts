import { IItems } from '../inputs/IInput';
import { TForm } from './TForm';
import { ButtonGroup } from '../inputs/ButtonGroup';
import { Basic } from '../inputs/Basic';
import { EHTMLTypes } from '../EHTMLTypes';
import { Select } from '../inputs/Select';
import { TextArea } from '../inputs/TextArea';
import {
    camere as camereItems,
    anConstructie as anConstructieItems,
    tipImobil as tipImobilItems,
    stadiuConstructie as stadiuConstructieItems
} from '../config/index';
import { AbstractFormModel } from './AbstractFormModel';

/**
* TODO create a form factory that returns forms like this one
* so you can give the strings as parameters and not hard code them in here
**/
export class CasaFormModel extends AbstractFormModel {
    private camere: Select;
    private bai: Basic;
    private suprafataUtila: Basic;
    private suprafataTeren: Basic;
    private pret: Basic;
    private anConstructie: Select;
    private anFinalizare: Basic;
    private stadiuConstructie: Select;
    private nrNiveluriPesteParter: Basic;
    // TODO
    // private extraOptiuni: CheckBox;

    /** state variables */
    private camereItems: IItems[] = camereItems;
    private anConstrictieItems: IItems[] = anConstructieItems;
    private stadiuConstructieItems: IItems[] = stadiuConstructieItems;

    constructor() {
        super();
        this.camere = new Select("", this.camereItems, "Nr. Camere", EHTMLTypes.SLECT, "camere", "camere");
        this.bai = new Basic("", "Nr. Bai", EHTMLTypes.NUMBER, "Nr. Bai", "bai", "bai");
        this.suprafataUtila = new Basic("", "Suprafata utila", EHTMLTypes.NUMBER, "mp", "suprafataUtila", "suptrafataUtila");
        this.suprafataTeren = new Basic("", "Suprafata teren", EHTMLTypes.NUMBER, "mp", "suprafataTeren", "suprafataTeren");
        this.pret = new Basic("", "Pret", EHTMLTypes.NUMBER, "euro", "pret", "pret");
        this.anConstructie = new Select("", this.anConstrictieItems, "An Constructie", EHTMLTypes.SLECT, "anConstructie", "anConstructie");
        this.anFinalizare = new Basic("", "An Finalizare", EHTMLTypes.NUMBER, "", "anFinalizare", "anFinalizare");
        this.stadiuConstructie = new Select("", this.stadiuConstructieItems, "An Constructie", EHTMLTypes.SLECT, "anConstructie", "anConstructie");
        this.nrNiveluriPesteParter = new Basic("", "Nr Niveluri Peste Parter", EHTMLTypes.NUMBER, "", "nrNiverluirPesteParter", "nrNiverluirPesteParter");
    }

    public generateFormFields(): TForm {
        return {
            titlu: this.titlu.generate(),
            camere: this.camere.generate(),
            // TODO make bai appear conditionally if camere > 2
            bai: this.bai.generate(),
            suprafataUtila: this.suprafataUtila.generate(),
            suprafataTeren: this.suprafataTeren.generate(),
            pret: this.pret.generate(),
            descriere: this.descriere.generate(),
            anConstructie: this.anConstructie.generate(),
            anFinalizare: this.anFinalizare.generate(),
            stadiuConstructie: this.stadiuConstructie.generate(),
            nrNiveluriPesteParter: this.nrNiveluriPesteParter.generate(),
            // TODO add locatie and imagini
        }
    }
}