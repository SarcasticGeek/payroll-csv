const moment = require('moment');
var program = require('commander');
var csv_export = require('csv-export');
var fs = require('fs');

 
program
  .version('0.1.0')
  .option('-b, --base', 'Base Salary')
  .option('-o, --bonus', 'Bonus')
  .parse(process.argv);

var baseSalaryMonths = [];
var bonusMonths = [];

for (let index = 1; index <= 12; index++) {
   var newdate = new moment().add(index, 'months').date(0);
   if(newdate.format('dddd') == "Friday"){
        newdate.subtract(1, 'days');
   }else if(newdate.format('dddd') == "Saturday"){
        newdate.subtract(2, 'days');
   }
   let monthName = moment().month(index).format('MMMM');
   baseSalaryMonths[monthName] = newdate.format("YYYY-MM-DD");
   //console.log("Base salary of " + moment().month(index).format('MMMM') + " in " + newdate.format("YYYY-MM-DD"),newdate.format('dddd'));
}

for (let index = 1; index <= 12; index++) {
    var newdate = new moment().add(index, 'months').date(0).add(15, 'days');
    if(newdate.format('dddd') == "Friday" || newdate.format('dddd') == "Saturday"){
        let WednesdayKey = 3; // Wednesday
        let missingDays = ((WednesdayKey - newdate.isoWeekday()) + 7) % 7;
        newdate = newdate.add(missingDays, "days");
    }
    let monthName = moment().month(index).format('MMMM');
    bonusMonths[monthName] = newdate.format("YYYY-MM-DD");
    //console.log("Bonses of " + moment().month(index).format('MMMM') + " in " + newdate.format("YYYY-MM-DD"),newdate.format('dddd'));
 }

if(program.base){
    console.log(baseSalaryMonths);
    csv_export.export(baseSalaryMonths,function(buffer){
        fs.writeFileSync('./tmp/export.zip',buffer);
      });
}

if(program.bonus){
    console.log(bonusMonths); 
    csv_export.export(bonusMonths,function(buffer){
        fs.writeFileSync('./tmp/export.zip',buffer);
      });
}