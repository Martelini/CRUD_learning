"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const express_1 = __importDefault(require("express"));
const smart_routes_1 = require("../routes/smart.routes");
const uri = 'mongodb+srv://souzamateus1998:EV5EGbftxv1fMPMx@cluster0.scduko7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const app = (0, express_1.default)();
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield yield client.connect();
            console.log('Connected to database!');
        }
        catch (error) {
            let message = 'Unknown error';
            if (error instanceof Error)
                message = error.message;
            reportError({ message });
        }
    });
}
function setServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            app.listen(3000, () => {
                console.log("Server is running on port 3000!");
            });
        }
        catch (error) {
            let message = 'Unknown error';
            if (error instanceof Error)
                message = error.message;
            reportError({ message });
        }
    });
}
app.use('', smart_routes_1.router);
connectToDatabase();
setServer();
