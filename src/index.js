const moment = require('moment');
var program = require('commander');
var fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
const fields = ['Month', 'Salary'];
const opts = { fields };
const Company = require('./models/company')
const Department = require('./models/department')

//Date now
let newdate = new moment();

const Payroll = require('./models/payroll');

var company = new Company('ABC ltd');
var department = new Department('Sales',company);
var payroll = new Payroll(newdate,department);

 
program
  .version('0.1.0')
  .option('-b, --base', 'Base Salaries and Export the CSV file in tmp folder')
  .option('-o, --bonus', 'Bonus Salaries and Export the CSV file in tmp folder')
  .option('-a, --all', 'All Salaries and Export the CSV file in tmp folder')
  .parse(process.argv);


if(program.base){
    let baseSalaryMonths = payroll.getBaseSalaryForNext12Months();
    let OutPutForCsv = [];
    for (const key in baseSalaryMonths) {
        if (baseSalaryMonths.hasOwnProperty(key)) {
            let obj = {
                "month": key,
                "salary": "Base Salary in " + baseSalaryMonths[key]
            }
            OutPutForCsv.push(obj);            
        }
    }
    const parser = new Json2csvParser(opts);
    const csv = parser.parse(OutPutForCsv);
    fs.writeFileSync('./tmp/baseSalaries.csv',csv);
}

if(program.bonus){
    let bonusMonths = payroll.getBonusSalaryForNext12Months();
    let OutPutForCsv = [];
    for (const key in bonusMonths) {
        if (bonusMonths.hasOwnProperty(key)) {
            let obj = {
                "month": key,
                "salary": "Bonus Salary in " + bonusMonths[key]
            }
            OutPutForCsv.push(obj);            
        }
    }
    const parser = new Json2csvParser(opts);
    const csv = parser.parse(OutPutForCsv);
    fs.writeFileSync('./tmp/bonusSalaries.csv',csv);
}
if(program.all){
    let baseSalaryMonths = payroll.getBaseSalaryForNext12Months();
    let bonusMonths = payroll.getBonusSalaryForNext12Months();
    let OutPutForCsv = [];
    for (const key in baseSalaryMonths) {
        if (baseSalaryMonths.hasOwnProperty(key) && bonusMonths.hasOwnProperty(key)) {
            let obj = {
                "month": key,
                "salary": "Base Salary in " + baseSalaryMonths[key] +" & Bonus Salary in "+ bonusMonths[key]
            }
            OutPutForCsv.push(obj);
        }
    }
    const parser = new Json2csvParser(opts);
    const csv = parser.parse(OutPutForCsv);
    fs.writeFileSync('./tmp/all.csv',csv);

}