"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Skola = new Schema({
    ime: { type: String },
    grad: { type: String },
    odeljenja: { type: Array }
});
exports.default = mongoose_1.default.model('Skola', Skola, 'skole');
//# sourceMappingURL=skola.js.map