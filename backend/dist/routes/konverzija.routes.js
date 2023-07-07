"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const konverzija_controller_1 = require("../controllers/konverzija.controller");
const konverzacijaRuter = express_1.default.Router();
konverzacijaRuter.route('/mojeKonverzacije').post((req, res) => new konverzija_controller_1.KonverzijaController().mojeKonverzacije(req, res));
konverzacijaRuter.route('/posaljiPoruku').post((req, res) => new konverzija_controller_1.KonverzijaController().posaljiPoruku(req, res));
konverzacijaRuter.route('/dohvatiPorukeOsoba1Osoba2').post((req, res) => new konverzija_controller_1.KonverzijaController().dohvatiPorukeOsoba1Osoba2(req, res));
konverzacijaRuter.route('/proveraPostojanaKonverzacije').post((req, res) => new konverzija_controller_1.KonverzijaController().proveraPostojanaKonverzacije(req, res));
konverzacijaRuter.route('/napraviNovuKonverzaciju').post((req, res) => new konverzija_controller_1.KonverzijaController().napraviNovuKonverzaciju(req, res));
exports.default = konverzacijaRuter;
//# sourceMappingURL=konverzija.routes.js.map