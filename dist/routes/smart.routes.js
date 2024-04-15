"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const smart_controllers_1 = require("../controllers/smart.controllers");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/home', smart_controllers_1.welcomeMessage);
exports.router.get('/signup', smart_controllers_1.signUp);
