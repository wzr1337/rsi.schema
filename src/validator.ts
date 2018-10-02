import path from "path";
import fs from "fs";
import Ajv from "ajv";
import { Logger } from "./Logger";


function readFile(filename:string){
  var json = null;
  var file = path.resolve(process.cwd(), filename);
  try {
      try {
          json = JSON.parse(fs.readFileSync(file, 'utf-8'));
      } catch(JSONerr) {
          json = require(file);
      }
  } catch(err) {
      Logger.error(err.message);
      process.exit(2);
  }
  return json;
}

export async function validate(candidatePath?:string):Promise<any> {
  candidatePath = candidatePath || path.join(process.cwd(), "src/schema.json");
  let ajv = new Ajv({
    //schemaId: 'id',
    allErrors: true,
    jsonPointers: true,
    //verbose: true
  });
  // To use Ajv with draft-06 schemas you need to explicitly add the meta-schema to the validator instance
  ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

  let validate = ajv.compile(readFile(path.join(__dirname, './$rsi.schema.json')));
  
  let result = await validate(readFile(candidatePath));
 
  if (validate.errors) throw {validationErrors: validate.errors};
}