"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var smart_controllers_1 = require("../controllers/smart.controllers");
var express_1 = require("express");
exports.router = (0, express_1.Router)();
// Welcome page
exports.router.get('/home', smart_controllers_1.welcomeMessage);
// Add users
exports.router.get('/signup', smart_controllers_1.signUp);
