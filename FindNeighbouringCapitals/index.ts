import {
    getCountryInformation,
    getNeighbouringCountries
} from './controllers/CountryApiController';


// Using a quick and dirty method to use `require()` for the `readline`
// module that provides an interface for reading data from, e.g., stadard 
// input. Alternatively, install type definitions for node with:
// `npm i --save-dev @types/node`
declare var require: any

async function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });  
    const question = 'For which country would you like to look up the ' +
                     'capital city and the capitals of all of its ' +
                     'neighbouring countries? Please provide an alpha-2 or ' +
                     'alpha-3 code.\n> ';
    
    // Prompt a question in the command-line interface.
    rl.question(question, async (countryName: string) => {
        try {
            const country = await getCountryInformation(countryName);

            let capitalsOfNeighbouringCountries: string[] = [];
            if (country.borders.length > 0) {
                const neighbouringCountries = await getNeighbouringCountries(
                    country.borders
                );
                
                neighbouringCountries.forEach(country => {
                    capitalsOfNeighbouringCountries.push(country.capital);
                });
            } else {
                capitalsOfNeighbouringCountries.push('N/A - No Countries');
            }

            console.log(
                `\n${country.name}\n` +
                `- Capital: ${country.capital}\n` +
                `- Capital(s) of Neighbouring Countries: ${
                    capitalsOfNeighbouringCountries.join(', ')
                }`
            );

            process.exitCode = 0;   // Assign a 'success' code to the program.
        } catch (error) {
            let statusCode = error.response.status;
            process.exitCode = 1;   // Assign a 'failure' code to the program.

            if (statusCode === 400 || statusCode === 404) {
                console.log(
                    'We couldn\'t find the country, please check the name ' +
                    'of the country and try again.'
                );
            }
            else {
                console.log(
                    `An error with the status code ${statusCode} occurred. ` +
                    `Please try again or contact ianikpark@gmail.com.`
                );
            }
        } finally {
            rl.close();
        }
    });

    // Terminate the `readline` and exit from the Node.js program.
    rl.on('close', function() {
        process.exit();
    });
}

main();
