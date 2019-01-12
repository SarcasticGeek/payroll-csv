const moment = require('moment');

function Payroll(date) {
    this.date = date;
}
// class methods
Payroll.prototype.getBaseSalaryDate = function(dateInput) {
    let newdate = dateInput.clone().add(1,'months').date(0);
    if(newdate.format('dddd') == "Friday"){
         newdate.subtract(1, 'days');
    }else if(newdate.format('dddd') == "Saturday"){
         newdate.subtract(2, 'days');
    }
    return newdate.format("YYYY-MM-DD");
};

Payroll.prototype.getBonusDate = function(dateInput) {
    let newdate = dateInput.clone().date(0).add(15, 'days');
    if(newdate.format('dddd') == "Friday" || newdate.format('dddd') == "Saturday"){
        let WednesdayKey = 3; // Wednesday
        let missingDays = ((WednesdayKey - newdate.isoWeekday()) + 7) % 7;
        newdate = newdate.add(missingDays, "days");
    }
    return newdate.format("YYYY-MM-DD");
};

Payroll.prototype.getBaseSalaryForNext12Months = function() {
    let BaseSalariesByMonth = [];
    for (let index = 0; index < 12; index++) {
        let newdate = this.date.clone();
        newdate.add(index, 'months');
        let monthName = newdate.format('MMMM');
        BaseSalariesByMonth[monthName] = this.getBaseSalaryDate(newdate);
    }
    return BaseSalariesByMonth;
}


Payroll.prototype.getBonusSalaryForNext12Months = function() {
    let BonusSalariesByMonth = [];
    for (let index = 0; index < 12; index++) {
        let newdate = this.date.clone();
        newdate.add(index, 'months');
        let monthName = newdate.format('MMMM');
        BonusSalariesByMonth[monthName] = this.getBonusDate(newdate);
    }
    return BonusSalariesByMonth;
}
module.exports = Payroll;