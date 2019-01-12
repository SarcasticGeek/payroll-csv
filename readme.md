# payroll-csv
- it is a CLI which exports the report of dates for next 12 months of Base Salaries and Bonuses.

## Installation 

```
git clone https://github.com/SarcasticGeek/payroll-csv.git
cd payroll-csv
npm install
```
## Run code 

`npm run start -- --help`

## Build

`npm run build` and you find binary file in `build` folder 

## Options
```
Options:
  -V, --version  output the version number
  -b, --base     Base Salaries and Export the CSV file in tmp folder 
  -o, --bonus    Bonus Salaries and Export the CSV file in tmp folder 
  -a, --all      All Salaries and Export the CSV file in tmp folder 
  -h, --help     output usage information
```

## Output

- Output of `npm run start -- -b` :
```csv
"Month","Salary"
"January","Base Salary in 2019-01-31"
"February","Base Salary in 2019-02-28"
"March","Base Salary in 2019-03-31"
"April","Base Salary in 2019-04-30"
"May","Base Salary in 2019-05-30"
"June","Base Salary in 2019-06-30"
"July","Base Salary in 2019-07-31"
"August","Base Salary in 2019-08-29"
"September","Base Salary in 2019-09-30"
"October","Base Salary in 2019-10-31"
"November","Base Salary in 2019-11-28"
"December","Base Salary in 2019-12-31"
```

- Output of `npm run start -- -o` :
```csv
"Month","Salary"
"January","Bonus Salary in 2019-01-15"
"February","Bonus Salary in 2019-02-20"
"March","Bonus Salary in 2019-03-20"
"April","Bonus Salary in 2019-04-15"
"May","Bonus Salary in 2019-05-15"
"June","Bonus Salary in 2019-06-19"
"July","Bonus Salary in 2019-07-15"
"August","Bonus Salary in 2019-08-15"
"September","Bonus Salary in 2019-09-15"
"October","Bonus Salary in 2019-10-15"
"November","Bonus Salary in 2019-11-20"
"December","Bonus Salary in 2019-12-15"
```

- Output of `npm run start -- -a` :
```csv
"Month","Salary"
"January","Base Salary in 2019-01-31 & Bonus Salary in 2019-01-15"
"February","Base Salary in 2019-02-28 & Bonus Salary in 2019-02-20"
"March","Base Salary in 2019-03-31 & Bonus Salary in 2019-03-20"
"April","Base Salary in 2019-04-30 & Bonus Salary in 2019-04-15"
"May","Base Salary in 2019-05-30 & Bonus Salary in 2019-05-15"
"June","Base Salary in 2019-06-30 & Bonus Salary in 2019-06-19"
"July","Base Salary in 2019-07-31 & Bonus Salary in 2019-07-15"
"August","Base Salary in 2019-08-29 & Bonus Salary in 2019-08-15"
"September","Base Salary in 2019-09-30 & Bonus Salary in 2019-09-15"
"October","Base Salary in 2019-10-31 & Bonus Salary in 2019-10-15"
"November","Base Salary in 2019-11-28 & Bonus Salary in 2019-11-20"
"December","Base Salary in 2019-12-31 & Bonus Salary in 2019-12-15"
```
