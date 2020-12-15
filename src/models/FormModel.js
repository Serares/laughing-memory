/**
 * select fields will have a number value associated with them
 * TODO try to create the repetitive parts with loops
 */

// THIS is the interface that is beeing implemented
// interface IFormModel {
//     titlu: string;
//     imagini: ;
// }
// TODO create an abstract factory to generate object literals for each input
/** number and text will have the same JSX element */

const apartamentModel = {
    titlu: {
        type: "text",
        value: "",
        placeholder: "Titlu Anunt",
        validation: "text"
    },
    // componenta radio o sa primeasca 
    camere: {
        type: "buttongroup",
        value: "",
        items: [
            {
                value: 51,
                label: "1"
            },
            {
                value: 52,
                label: "2"
            },
        ],
        placeholder: "Nr. Camere"
    },
    bai: {
        type: "number",
        value: "",
        placeholder: "Nr. bai"
    },
    compartimentare: {
        type: "select",
        items: [
            {
                value: 1,
                label: "Decomandat"
            },
            {
                value: 2,
                label: "Semidecomandat"
            },
            {
                value: 3,
                label: "Nedecomandat"
            },
            {
                value: 4,
                label: "Circular"
            },
            {
                value: 5,
                label: "Vagon"
            }
        ],
        value: "",
        placeholder: "Compartimentare"
    },
    etaj: {
        type: "select",
        items: [
            {
                value: 21,
                label: "Demisol"
            },
            {
                value: 22,
                label: "Parter"
            },
            {
                value: 23,
                label: "1"
            },
            {
                value: 24,
                label: "Mansarda"
            },
            {
                value: 25,
                label: "Ultimul Etaj"
            }
        ],
        value: "",
        placeholder: "Etaj"
    },
    suprafata: {
        type: "number",
        value: "",
        placeholder: "Suprafata"
    },
    pret: {
        type: "number",
        value: "",
        placeholder: "Etaj"
    },
    localizare: {
        type: "map",
        value: "",
        coordinates: {
            lat: "",
            lng: ""
        },
        placeholder: "Localizare"
    },
    anConstructie: {
        type: "select",
        items: [
            {
                value: 31,
                label: "Mai nou de 2000"
            },
            {
                value: 32,
                label: "Intre 1990 si 2000"
            },
            {
                value: 33,
                label: "Intre 1977 si 1990"
            },
            {
                value: 34,
                label: "Intre 1941 si 1977"
            },
            {
                value: 35,
                label: "Mai vechi de 1947"
            }
        ],
        value: "",
        placeholder: "An Constructie"
    },
    tipImobil: {
        type: "select",
        items: [
            {
                value: 41,
                label: "Bloc de apartamente"
            },
            {
                value: 42,
                label: "Casa/Vila"
            }
        ],
        value: "",
        placeholder: "Tip Imobil"
    },
    descriere: {
        type: "textfield",
        value: "",
        placeholder: "Descriere"
    }
};


