const moment = require('moment');
var program = require('commander');
var csv_export = require('csv-export');
var fs = require('fs');

let newdate = new moment();

const Payroll = require('./models/payroll');

var payroll = new Payroll(newdate);

 
program
  .version('0.1.0')
  .option('-b, --base', 'Base Salary')
  .option('-o, --bonus', 'Bonus')
  .parse(process.argv);


if(program.base){
    console.log(payroll.getBaseSalaryForNext12Months());
    let baseSalaryMonths = payroll.getBaseSalaryForNext12Months();
    csv_export.export(baseSalaryMonths,function(buffer){
        fs.writeFileSync('./tmp/export.zip',buffer);
      });
}

if(program.bonus){
    console.log(payroll.getBonusSalaryForNext12Months());
    let bonusMonths = payroll.getBonusSalaryForNext12Months();
    csv_export.export(bonusMonths,function(buffer){
        fs.writeFileSync('./tmp/export.zip',buffer);
      });
}