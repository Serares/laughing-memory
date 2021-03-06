export const propertyFields = {
    "titlu": { "info": "", "element": "input", "config": { "type": "text", "placeholder": "Adauga titlul", "name": "titlu", "id": "titlu" }, "value": "" },
    "adresa": { "info": "Ar fii bine sa contina si zona gen Sector 1", "element": "input", "config": { "type": "text", "placeholder": "Adauga adresa", "name": "adresa", "id": "adresa" }, "value": "" },
    "etaj": { "info": "Adauga etajul si aici chiar daca il pui in caracteristici", "element": "input", "config": { "type": "number", "placeholder": "Baga un numar sau 0", "name": "etaj", "id": "etaj" }, "value": "" },
    "bai": { "info": "Adauga numarul de băi chiar daca le pui in caracteristici", "element": "input", "config": { "type": "number", "placeholder": "Baga un numar sau 0", "name": "bai", "id": "bai" }, "value": "" },
    "camere": { "info": "Adauga camerele si aici chiar daca il pui in caracteristici", "element": "input", "config": { "type": "number", "placeholder": "Baga un numar sau 0", "name": "camere", "id": "camere" }, "value": "" },
    "suprafata": { "info": "Adauga doar numarul fara litere", "element": "input", "config": { "type": "number", "placeholder": "Adauga suprafata MP", "name": "suprafata", "id": "suprafata" }, "value": "" },
    "pret": { "info": "Adauga doar numarul fara litere", "element": "input", "config": { "type": "number", "placeholder": "Adauga pret", "name": "pret", "id": "pret" }, "value": "" },
    "detalii": { "info": "", "element": "textarea", "config": { "type": "text", "placeholder": "Adauga detalii", "name": "detalii", "id": "detalii" }, "value": "" },
    "mobilat": { "info": "", "element": "select", "config": { "options": [{ "display": "Da", "value": "1" }, { "display": "Nu", "value": "0" }] }, "value": "" },
    "persoanaContact": { "info": "Alege cine va fi persoana de contact pentru proprietatea postată", "element": "select", "config": { "options": [] }, "value": "" },
    "status": { "info": "", "element": "select", "config": { "options": "statusProprietate" }, "value": "" },
    "tipProprietate": { "info": "", "element": "select", "config": { "options": "tipuriProprietate" }, "value": "" },
    "imagini": { "info": "", "element": "inputFiles", "config": { "type": "file", "multiple": false, "name": "imagini", "className": "imagini" }, "value": "" },
    "caracteristici": { "element": "caracteristici", "config": { "type": "caracteristici" }, "value": [{ "key": "Etaj", "value": "4/5" }, { "key": "Zona", "value": "Sector 5" }], "info": "" },
    "specificatii": { "element": "specificatii", "config": { "type": "specificatii" }, "value": [{ "name": "", "specs": [""] }], "info": "" },
    "location": { "element": "location", "config": { "type": "location" }, "value": { "lat": 43.946756656718044, "lng": 28.630233764124572 }, "info": "" },
    "featured": { "info": "Proprietatea apare pe landing page daca selectezi \'DA\' ", "element": "select", "config": { "options": [{ "display": "Da", "value": "1" }, { "display": "Nu", "value": "0" }] }, "value": "" }
};

export const tipuriProprietate = [
    { "display": "Casa", "value": "1" },
    { "display": "Apartament", "value": "2" },
    { "display": "Garsoniera", "value": "3" },
    { "display": "Vila", "value": "4" },
    { "display": "Teren", "value": "5" },
    { "display": "Birouri", "value": "6" },
    { "display": "Proprietate Speciala", "value": "7" }
];

export const statusProprietate = [
    { "display": "Vanzare", "value": "1" },
    { "display": "Inchiriere", "value": "2" }
];


export enum TransactionTypes {
    VANZARE = "Vanzare"
}

export interface IApartamentForm {
    camere: {

    },
    compartimentare: {

    },
    confort: {

    },
    etaj: {

    },
    suprafata: {

    },
    pret: {

    },
    localizare: {

    },
    descriere: {

    }
};
