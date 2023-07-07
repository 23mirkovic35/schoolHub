"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkolaController = void 0;
const skola_1 = __importDefault(require("../models/skola"));
class SkolaController {
    constructor() {
        this.dohvatiSkole = (req, res) => {
            skola_1.default.find({}, (err, school) => {
                if (err)
                    console.log(err);
                else
                    res.json(school);
            });
        };
        this.zakaziRoditeljski = (req, res) => {
            let skola = req.body.skola;
            let odeljenje = req.body.odeljenje;
            let roditeljski = req.body.roditeljski;
            skola_1.default.collection.updateOne({ 'ime': skola, 'odeljenja.naziv': odeljenje }, { $set: { 'odeljenja.$.roditeljski': roditeljski } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'OK' });
            });
        };
    }
}
exports.SkolaController = SkolaController;
//# sourceMappingURL=skola.controller.js.map