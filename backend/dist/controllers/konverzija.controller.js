"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KonverzijaController = void 0;
const konverzacija_1 = __importDefault(require("../models/konverzacija"));
class KonverzijaController {
    constructor() {
        this.mojeKonverzacije = (req, res) => {
            let username = req.body.username;
            konverzacija_1.default.find({ $or: [{ 'osoba1': username }, { 'osoba2': username }] }, (err, konverzacije) => {
                if (err)
                    console.log(err);
                else
                    res.json(konverzacije);
            });
        };
        this.posaljiPoruku = (req, res) => {
            let poruka = req.body.poruka;
            let osoba1 = req.body.osoba1;
            let osoba2 = req.body.osoba2;
            konverzacija_1.default.collection.updateOne({ 'osoba1': osoba1, 'osoba2': osoba2 }, { $push: { 'poruke': poruka } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.dohvatiPorukeOsoba1Osoba2 = (req, res) => {
            let osoba1 = req.body.osoba1;
            let osoba2 = req.body.osoba2;
            konverzacija_1.default.findOne({ $and: [{ 'osoba1': osoba1 }, { 'osoba2': osoba2 }] }, (err, konverzacije) => {
                if (err)
                    console.log(err);
                else
                    res.json(konverzacije);
            });
        };
        this.proveraPostojanaKonverzacije = (req, res) => {
            let osoba1 = req.body.osoba1;
            let osoba2 = req.body.osoba2;
            konverzacija_1.default.findOne({ $or: [
                    { $and: [{ 'osoba1': osoba1 }, { 'osoba2': osoba2 }] },
                    { $and: [{ 'osoba1': osoba2 }, { 'osoba2': osoba1 }] }
                ] }, (err, konverzacije) => {
                if (err)
                    console.log(err);
                else
                    res.json(konverzacije);
            });
        };
        this.napraviNovuKonverzaciju = (req, res) => {
            let konv = new konverzacija_1.default(req.body);
            konv.save().then(resp => {
                res.json({ 'message': 'ok' });
            }).catch(err => {
                console.log(err);
            });
        };
    }
}
exports.KonverzijaController = KonverzijaController;
//# sourceMappingURL=konverzija.controller.js.map