"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var styled_1 = __importDefault(require("@emotion/styled"));
exports.h1Style = core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: hotpink;\n"], ["\n  color: hotpink;\n"])));
exports.H1Styled = styled_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), exports.h1Style);
var templateObject_1, templateObject_2;
