"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Paragraph_style_1 = require("./Paragraph.style");
var Paragraph = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(Paragraph_style_1.StyledP, null, children));
};
exports.default = Paragraph;
