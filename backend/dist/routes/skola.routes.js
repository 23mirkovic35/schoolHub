"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const skola_controller_1 = require("../controllers/skola.controller");
const skolaRuter = express_1.default.Router();
skolaRuter.route('/dohvatiSkole').get((req, res) => new skola_controller_1.SkolaController().dohvatiSkole(req, res));
skolaRuter.route('/zakaziRoditeljski').post((req, res) => new skola_controller_1.SkolaController().zakaziRoditeljski(req, res));
exports.default = skolaRuter;
//# sourceMappingURL=skola.routes.js.map