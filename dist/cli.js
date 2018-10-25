#!/usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("./validator");
const path = __importStar(require("path"));
const Logger_1 = require("./Logger");
const domain = process.argv[2];
let schemaPath;
switch (domain) {
    case "media":
        schemaPath = path.join(__dirname, "../examples/media/schema.json");
        break;
    default:
        console.log("Usage `$ dist/cli.js <domain>");
}
validator_1.validate(schemaPath).then(() => {
    Logger_1.Logger.success("Schema valid!");
}).catch((err) => {
    Logger_1.Logger.error(err);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsMkNBQXVDO0FBQ3ZDLDJDQUE2QjtBQUM3QixxQ0FBa0M7QUFFbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQixJQUFJLFVBQVUsQ0FBQztBQUVmLFFBQVEsTUFBTSxFQUFFO0lBQ2QsS0FBSyxPQUFPO1FBQ1YsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLCtCQUErQixDQUFDLENBQUM7UUFDckUsTUFBTTtJQUNOO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0NBQ2hEO0FBRUQsb0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQzdCLGVBQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDZixlQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDIn0=