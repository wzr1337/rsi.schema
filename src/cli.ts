#!/usr/bin/env node

import { validate } from "./validator";
import * as path from "path";
import { Logger } from "./Logger";

const domain = process.argv[2];
let schemaPath;

switch (domain) {
  case "media":
    schemaPath = path.join(__dirname, "../examples/media/schema.json"); 
  break;
  default:
    console.log("Usage `$ dist/cli.js <domain>");
}

validate(schemaPath).then(() => {
  Logger.success("Schema valid!");
}).catch((err) => {
  Logger.error(err);
});