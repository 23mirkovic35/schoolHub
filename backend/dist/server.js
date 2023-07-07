"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const korisnik_routes_1 = __importDefault(require("./routes/korisnik.routes"));
const skola_routes_1 = __importDefault(require("./routes/skola.routes"));
const multer_1 = __importDefault(require("multer"));
const konverzija_routes_1 = __importDefault(require("./routes/konverzija.routes"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../frontend/src/assets/korisnici');
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname);
    }
});
const uploadMulter = multer_1.default({ storage: storage });
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/projekat_usp');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('Uspesno konektovanje sa bazonm!');
});
const router = express_1.default.Router();
router.use('/korisnici', korisnik_routes_1.default);
router.use('/skole', skola_routes_1.default);
router.use('/konverzacije', konverzija_routes_1.default);
app.post('/file', uploadMulter.single('file'), (req, res, next) => {
    console.log('Slika promenjena!');
});
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map