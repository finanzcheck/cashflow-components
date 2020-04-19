"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var defaultTheme_1 = require("./theme/themes/defaultTheme");
var getDisplayName = function (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
};
exports.withTheme = function (BaseComponent) {
    var WithTheme = function (props) {
        var theme = props.theme, restProps = __rest(props, ["theme"]);
        return react_1.createElement(BaseComponent, __assign({ theme: __assign(__assign({}, defaultTheme_1.DEFAULT_THEME), theme) }, restProps), props.children);
    };
    WithTheme.displayName = "withOffers(" + getDisplayName(BaseComponent) + ")";
};
