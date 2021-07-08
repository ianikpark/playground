export interface CountryPayload {
    name: string;
    topLevelDomain: (string)[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: (string)[];
    capital: string;
    altSpellings: (string)[];
    region: string;
    subregion: string;
    population: number;
    latlng: (number)[];
    demonym: string;
    area: number;
    gini: number;
    timezones: (string)[];
    borders: (string)[];
    nativeName: string;
    numericCode: string;
    currencies: (Currency)[];
    languages: (Language)[];
    translations: Translation;
    flag: string;
    regionalBlocs: (RegionalBloc)[];
    cioc: string;
}

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface Translation {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
}

export interface RegionalBloc {
    acronym: string;
    name: string;
    otherAcronyms?: (string | null)[] | null;
    otherNames?: (string)[] | null;
}

export class Country {
    private _name: string;
    private _alpha2Code: string;
    private _alpha3Code: string;
    private _altNames: string[];
    private _capital: string;
    private _borders: string[];

    constructor(payload: CountryPayload) {
        const { 
            name,
            topLevelDomain,
            alpha2Code,
            alpha3Code,
            callingCodes,
            capital,
            altSpellings,
            region,
            subregion,
            population,
            latlng,
            demonym,
            area,
            gini,
            timezones,
            borders,
            nativeName,
            numericCode,
            currencies,
            languages,
            translations,
            flag,
            regionalBlocs,
            cioc
         } = payload;

         this._name = name;
         this._alpha2Code = alpha2Code;
         this._alpha3Code = alpha3Code;
         this._altNames = altSpellings;
         this._capital = capital;
         this._borders = borders;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get alpha2Code(): string {
        return this._alpha2Code;
    }

    set alpha2Code(alpha2Code: string) {
        this._alpha2Code = alpha2Code;
    }

    get alpha3Code(): string {
        return this._alpha3Code;
    }

    set alpha3Code(alpha3Code: string) {
        this._alpha3Code = alpha3Code;
    }

    get altNames(): string[] {
        return this._altNames;
    }

    set altNames(altNames: string[]) {
        this._altNames = altNames;
    }

    get capital(): string {
        return this._capital;
    }

    set capital(capital: string) {
        this._capital = capital;
    }

    get borders(): string[] {
        return this._borders;
    }

    set borders(borders: string[]) {
        this._borders = borders;
    }
}
