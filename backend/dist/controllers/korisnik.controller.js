"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KorisnikController = void 0;
const korisnik_1 = __importDefault(require("../models/korisnik"));
class KorisnikController {
    constructor() {
        this.prijava = (req, res) => {
            let username = req.body.username;
            let lozinka = req.body.lozinka;
            let tip = req.body.tip;
            korisnik_1.default.findOne({
                'username': username,
                'lozinka': lozinka,
                'tip': tip,
                'accepted': 1
            }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.svi = (req, res) => {
            korisnik_1.default.find({}, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.dohvatiRoditelje = (req, res) => {
            korisnik_1.default.find({ 'tip': "roditelj" }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.dohvatiNastavnike = (req, res) => {
            korisnik_1.default.find({ 'tip': "nastavnik" }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.dohvatiKorPoUN = (req, res) => {
            let username = req.body.username;
            korisnik_1.default.findOne({ 'username': username }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.dohvatiUcenPoOdeljenju = (req, res) => {
            let odeljenje = req.body.odeljenje;
            korisnik_1.default.find({ 'odeljenje': odeljenje, 'tip': 'učenik', 'accepted': 1 }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.dodeliOdeljenjeNastavniku = (req, res) => {
            let username = req.body.username;
            let odeljenje = req.body.odeljenje;
            korisnik_1.default.collection.updateOne({ 'username': username }, { $set: { 'razredni': odeljenje } }, (err, user) => {
                if (err)
                    res.json({ 'message': err });
                else
                    res.json({ 'message': 'OK' });
            });
        };
        this.dodajPredmetNastavniku = (req, res) => {
            let username = req.body.username;
            let predmet = req.body.predmet;
            korisnik_1.default.collection.updateOne({ 'username': username }, { $push: { 'predmeti': predmet } }, (err, user) => {
                if (err)
                    res.json({ 'message': err });
                else
                    res.json({ 'message': 'OK' });
            });
        };
        this.upisiOcenu = (req, res) => {
            let username = req.body.username;
            let predmet = req.body.predmet;
            let ocena = req.body.ocena;
            korisnik_1.default.collection.updateOne({ 'username': username, 'spisak_ocena.naziv': predmet }, { $push: { 'spisak_ocena.$.ocene': ocena } }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'OK' });
            });
        };
        this.zakljuciOcenu = (req, res) => {
            let username = req.body.username;
            let predmet = req.body.predmet;
            let zakljocena = req.body.zakljocena;
            korisnik_1.default.collection.updateOne({ 'username': username, 'spisak_ocena.naziv': predmet }, { $set: { 'spisak_ocena.$.zakljucna_ocena': zakljocena } }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'OK' });
            });
        };
        this.registracija = (req, res) => {
            let kor = new korisnik_1.default(req.body);
            kor.save().then(kor => {
                res.json({ 'message': 'OK' });
            }).catch(err => {
                res.json({ 'message': err });
            });
        };
        this.zahtevi = (req, res) => {
            korisnik_1.default.find({
                'accepted': 0
            }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        };
        this.odbij = (req, res) => {
            let username = req.body.username;
            korisnik_1.default.remove({ 'username': username }, (err) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'delete': true });
            });
        };
        this.prihvati = (req, res) => {
            let username = req.body.username;
            korisnik_1.default.updateOne({ 'username': username }, {
                $set: {
                    'accepted': 1
                }
            }, (err) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'update': true });
            });
        };
        this.izmeni = (req, res) => {
            let ime = req.body.ime;
            let prezime = req.body.prezime;
            let username = req.body.username;
            let lozinka = req.body.lozinka;
            let email = req.body.email;
            let mesto = req.body.mesto;
            let drzava = req.body.drzava;
            let slika = req.body.slika;
            korisnik_1.default.updateOne({ 'username': username }, {
                $set: {
                    "ime": ime,
                    "prezime": prezime,
                    "username": username,
                    "lozinka": lozinka,
                    "email": email,
                    "slika": slika,
                    "mesto": mesto,
                    "drzava": drzava
                }
            }, (err) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'update': true });
            });
        };
        this.dohvatiKorisnikaPoUsername = (req, res) => {
            let username = req.body.username;
            korisnik_1.default.findOne({
                'username': username,
                'accepted': 1
            }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.dohvatiOdeljenje = (req, res) => {
            let odeljenje = req.body.odeljenje;
            let skola = req.body.skola;
            korisnik_1.default.find({
                'odeljenje': odeljenje,
                'skola': skola,
                'tip': 'učenik',
                'accepted': 1
            }, (err, ucenici) => {
                if (err)
                    console.log(err);
                else
                    res.json(ucenici);
            });
        };
    }
}
exports.KorisnikController = KorisnikController;
//# sourceMappingURL=korisnik.controller.js.map