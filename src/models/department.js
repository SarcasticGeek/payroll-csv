function Department(name,company) {
    this.name = name;
    this.company = company;
}

Department.prototype.getDepartmentName = function(){
    return this.name;
}

Department.prototype.setDepartmentName = function(name){
    this.name = name;
}

Department.prototype.getDepartmentCompany = function(){
    return this.company;
}

Department.prototype.setDepartmentCompany = function(company){
    this.company = company;
}

module.exports = Department;