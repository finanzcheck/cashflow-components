"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Headline1_style_1 = require("./Headline1.style");
var Headline1 = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(Headline1_style_1.H1Styled, null, children));
};
exports.default = Headline1;
