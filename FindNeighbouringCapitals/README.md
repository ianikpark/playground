## Capital Cities

Use modern JavaScript and HTML5 to access information from the https://restcountries.eu/ API. The goal is to display a list of all the capital cities for the country and all of its neighbouring countries. E.g. Searching for “USA” will result in a list showing "Washington, D.C.", "Ottawa", and "Mexico City".

You may assume that you have access to all ES2017 features.. If your solution queries a country with N neighbours, it should not then make N sequential calls to the API.

### How to Run

Built and tested on Windows Subsystem for Linux 2 (WSL 2) running Ubuntu 18.04.5 LTS.

1. Clone the repository, if you have not done so, yet.
```
git clone git@github.com:ianikpark/playground.git
```

2. Navigate to the home directory of the current project.
```
cd playground/FindNeighbouringCountries
```

3. Refresh your local package index.
```
sudo apt update
```

3. Install [Node.js 14.17.1 LTS](https://nodejs.org/en/download/) (the latest LTS version as of June 18, 2021).

4. Install [axios](https://github.com/axios/axios#installing).
```
npm install axios
```

5. Compile the program (using the TypeScript configuration file `tsconfig.json`).
```
tsc -p .
```

6. Run the program. Follow the prompts in the command-line interface.
```
node out/index.js
```
