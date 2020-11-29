/**
 * This is the Estates/Properties interfaces file
 */

export interface IEstate {
    title: string;
    // todo images should be an images type; do the research
    images: string[]
};


export interface ICasa extends IEstate {
    numarCamare: number;
    numarBai: number;
};

export interface IApartament extends IEstate {
    etaj: number;
};