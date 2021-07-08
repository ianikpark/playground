import axios from 'axios';

import { CountryPayload, Country } from '../models/Country';


const apiEndpoint = 'https://restcountries.eu/rest/v2';

/**
 * Gets country information from REST Countries (https://restcountries.eu/).
 * 
 * @param name The name of the country to search for.
 * @returns A Country, if it exists; a new rejected Promise, otherwise.
 */
export async function getCountryInformation(name: string): Promise<Country> {
    const url = `${apiEndpoint}/alpha/${name}`;

    try {
        const response = await axios.get<CountryPayload>(url);

        // TODO: Compare `name` with `altSpellings` as well, not with just
        // `alpha2Code` and `alpha3Code`. Also, consider using a string metric
        // for approximate string matching in case the user makes a typo -- we
        // can use the Levenshtein distance as a string metric.

        return new Country(response.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

/**
 * Gets neighbouring countries' information from REST Countries 
 * (https://restcountries.eu/).
 * 
 * @param countryCodes The country codes in a list. The codes can be 
 *                     either `alpha2Code` or `alpha3Code`.
 * @returns A list of Country objects, if any; a new rejected Promise, 
 *          otherwise.
 */
export async function getNeighbouringCountries(countryCodes: string[]): 
Promise<Country[]> {
    const codes = countryCodes.join(';');
    const url = `${apiEndpoint}/alpha?codes=${codes}`;
    
    try {
        const response = await axios.get<CountryPayload[]>(url);

        let neighbouringCountries: Country[] = [];
        response.data.forEach((country: CountryPayload) => {
            let neighbouringCountry = new Country(country);
            neighbouringCountries.push(neighbouringCountry);
        });
        
        return neighbouringCountries;
    } catch (error) {
        return Promise.reject(error);
    }
}
