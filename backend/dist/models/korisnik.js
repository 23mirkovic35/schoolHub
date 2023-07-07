"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Korisnik = new Schema({
    ime: { type: String },
    un_roditelja: { type: String },
    un_deteta: { type: String },
    prezime: { type: String },
    username: { type: String, unique: true },
    lozinka: { type: String },
    email: { type: String, unique: true },
    slika: { type: String },
    mesto: { type: String },
    drzava: { type: String },
    tip: { type: String },
    accepted: { type: Number },
    skola: { type: String },
    odeljenje: { type: String },
    spisak_ocena: { type: Array },
    predmeti: { type: Array },
    razredni: { type: String }
});
exports.default = mongoose_1.default.model('Korisnik', Korisnik, 'korisnici');
//# sourceMappingURL=korisnik.js.map