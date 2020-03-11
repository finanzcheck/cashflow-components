"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@emotion/core");
var Headline1_style_1 = require("./Headline1.style");
var Headline1 = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("h1", { css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ", "\n    "])), Headline1_style_1.h1Style) }, children));
};
exports.default = Headline1;
var templateObject_1;
