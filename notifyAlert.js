"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
function notifyAlert(config) {
    config.callbacks.notify = function (_a) {
        var message = _a.message, type = _a.type, options = _a.options;
        return new Promise(function (resolve) {
            var buttons = options.buttons, otherOptions = __rest(options, ["buttons"]);
            react_native_1.Alert.alert.apply(react_native_1.Alert, [type.toUpperCase(), message, buttons].concat(otherOptions));
        });
    };
    return config;
}
exports.default = notifyAlert;
