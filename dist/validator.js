"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const ajv_1 = __importDefault(require("ajv"));
const Logger_1 = require("./Logger");
function readFile(filename) {
    var json = null;
    var file = path_1.default.resolve(process.cwd(), filename);
    try {
        try {
            json = JSON.parse(fs_1.default.readFileSync(file, 'utf-8'));
        }
        catch (JSONerr) {
            json = require(file);
        }
    }
    catch (err) {
        Logger_1.Logger.error(err.message);
        process.exit(2);
    }
    return json;
}
function validate(candidatePath) {
    return __awaiter(this, void 0, void 0, function* () {
        candidatePath = candidatePath || path_1.default.join(process.cwd(), "src/schema.json");
        let ajv = new ajv_1.default({
            //schemaId: 'id',
            allErrors: true,
            jsonPointers: true,
        });
        // To use Ajv with draft-06 schemas you need to explicitly add the meta-schema to the validator instance
        ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
        let validate = ajv.compile(readFile(path_1.default.join(__dirname, './$rsi.schema.json')));
        // @TODO: To allow maintaining the validator separately from the schema, 
        // it should be pulled from the server by th url referenced in the candidate
        let result = yield validate(readFile(candidatePath));
        if (validate.errors)
            throw { validationErrors: validate.errors };
    });
}
exports.validate = validate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3ZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLDRDQUFvQjtBQUNwQiw4Q0FBc0I7QUFDdEIscUNBQWtDO0FBR2xDLFNBQVMsUUFBUSxDQUFDLFFBQWU7SUFDL0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksSUFBSSxHQUFHLGNBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELElBQUk7UUFDQSxJQUFJO1lBQ0EsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUFDLE9BQU0sT0FBTyxFQUFFO1lBQ2IsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtLQUNKO0lBQUMsT0FBTSxHQUFHLEVBQUU7UUFDVCxlQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25CO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBc0IsUUFBUSxDQUFDLGFBQXFCOztRQUNsRCxhQUFhLEdBQUcsYUFBYSxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDN0UsSUFBSSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUM7WUFDaEIsaUJBQWlCO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUk7U0FFbkIsQ0FBQyxDQUFDO1FBQ0gsd0dBQXdHO1FBQ3hHLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUVyRSxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRix5RUFBeUU7UUFDekUsNEVBQTRFO1FBRTVFLElBQUksTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRXJELElBQUksUUFBUSxDQUFDLE1BQU07WUFBRSxNQUFNLEVBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDO0lBQ2pFLENBQUM7Q0FBQTtBQWxCRCw0QkFrQkMifQ==