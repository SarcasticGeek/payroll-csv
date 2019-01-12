var fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
const fields = ['Month', 'Salary'];
const opts = { fields };

CreateCsv = function(filename,outputforcsv) {
    const parser = new Json2csvParser(opts);
    const csvOut = parser.parse(outputforcsv);
    if(fs.existsSync('./tmp')){
        fs.writeFileSync('./tmp/'+ filename +'.csv',csvOut);
    }else{
        fs.mkdirSync('tmp');
        fs.writeFileSync('./tmp/'+ filename +'.csv',csvOut);
    }
}

module.exports = CreateCsv;