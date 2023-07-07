"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Konverzacije = new Schema({
    poruke: { type: Array },
    osoba1: { type: String },
    osoba2: { type: String },
    neprocitano_osoba1: { type: Number },
    neprocitano_osoba2: { type: Number },
    id: { type: Number }
});
exports.default = mongoose_1.default.model('Konverzacije', Konverzacije, 'konverzacije');
//# sourceMappingURL=konverzacija.js.map