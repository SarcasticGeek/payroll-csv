const moment = require('moment');
var program = require('commander');

const Company = require('./models/company')
const Department = require('./models/department')
var CreateCsv = require('./helpers/createCsv');
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
                "Month": key,
                "Salary": "Base Salary in " + baseSalaryMonths[key]
            }
            OutPutForCsv.push(obj);            
        }
    }
    CreateCsv('baseSalaries',OutPutForCsv);
}
if(program.bonus){
    let bonusMonths = payroll.getBonusSalaryForNext12Months();
    let OutPutForCsv = [];
    for (const key in bonusMonths) {
        if (bonusMonths.hasOwnProperty(key)) {
            let obj = {
                "Month": key,
                "Salary": "Bonus Salary in " + bonusMonths[key]
            }
            OutPutForCsv.push(obj);            
        }
    }
    CreateCsv('bonusSalaries',OutPutForCsv);
}
if(program.all){
    let baseSalaryMonths = payroll.getBaseSalaryForNext12Months();
    let bonusMonths = payroll.getBonusSalaryForNext12Months();
    let OutPutForCsv = [];
    for (const key in baseSalaryMonths) {
        if (baseSalaryMonths.hasOwnProperty(key) && bonusMonths.hasOwnProperty(key)) {
            let obj = {
                "Month": key,
                "Salary": "Base Salary in " + baseSalaryMonths[key] +" & Bonus Salary in "+ bonusMonths[key]
            }
            OutPutForCsv.push(obj);
        }
    }
    CreateCsv('all',OutPutForCsv);
}