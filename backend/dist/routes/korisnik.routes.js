"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const korisnik_controller_1 = require("../controllers/korisnik.controller");
const korisnikRuter = express_1.default.Router();
korisnikRuter.route('/prijava').post((req, res) => new korisnik_controller_1.KorisnikController().prijava(req, res));
korisnikRuter.route('/dohvati').get((req, res) => new korisnik_controller_1.KorisnikController().svi(req, res));
korisnikRuter.route('/dohvatiRoditelje').get((req, res) => new korisnik_controller_1.KorisnikController().dohvatiRoditelje(req, res));
korisnikRuter.route('/dohvatiNastavnike').get((req, res) => new korisnik_controller_1.KorisnikController().dohvatiNastavnike(req, res));
korisnikRuter.route('/dohvatiKorPoUN').post((req, res) => new korisnik_controller_1.KorisnikController().dohvatiKorPoUN(req, res));
korisnikRuter.route('/dohvatiUcenPoOdeljenju').post((req, res) => new korisnik_controller_1.KorisnikController().dohvatiUcenPoOdeljenju(req, res));
korisnikRuter.route('/dodeliOdeljenjeNastavniku').post((req, res) => new korisnik_controller_1.KorisnikController().dodeliOdeljenjeNastavniku(req, res));
korisnikRuter.route('/upisiOcenu').post((req, res) => new korisnik_controller_1.KorisnikController().upisiOcenu(req, res));
korisnikRuter.route('/zakljuciOcenu').post((req, res) => new korisnik_controller_1.KorisnikController().zakljuciOcenu(req, res));
korisnikRuter.route('/dodajPredmetNastavniku').post((req, res) => new korisnik_controller_1.KorisnikController().dodajPredmetNastavniku(req, res));
korisnikRuter.route('/registracija').post((req, res) => new korisnik_controller_1.KorisnikController().registracija(req, res));
korisnikRuter.route('/zahtevi').get((req, res) => new korisnik_controller_1.KorisnikController().zahtevi(req, res));
korisnikRuter.route('/odbij').post((req, res) => new korisnik_controller_1.KorisnikController().odbij(req, res));
korisnikRuter.route('/prihvati').post((req, res) => new korisnik_controller_1.KorisnikController().prihvati(req, res));
korisnikRuter.route('/izmeni').post((req, res) => new korisnik_controller_1.KorisnikController().izmeni(req, res));
korisnikRuter.route('/dohvatiKorisnikaPoUsername').post((req, res) => new korisnik_controller_1.KorisnikController().dohvatiKorisnikaPoUsername(req, res));
korisnikRuter.route('/dohvatiOdeljenje').post((req, res) => new korisnik_controller_1.KorisnikController().dohvatiOdeljenje(req, res));
exports.default = korisnikRuter;
//# sourceMappingURL=korisnik.routes.js.map