var inputfile = './src/$rsi.schema.yml',
    outputfile = './dist/$rsi.schema.json',
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
// this code if you want to save
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));