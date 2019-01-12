function Company(name) {
    this.name = name;
}

Company.prototype.getCompanyName = function(){
    return this.name;
}

Company.prototype.setCompanyName = function(name){
    this.name = name;
}

module.exports = Company;