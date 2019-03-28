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
Object.defineProperty(exports, "__esModule", { value: true });
var native_base_1 = require("native-base");
function notifySnackbar(config) {
    config.callbacks.notify = function (_a) {
        var message = _a.message, type = _a.type, options = _a.options;
        return new Promise(function (resolve) {
            native_base_1.Toast.show(__assign({ buttonText: "Hide" }, options, { text: message, type: type === "success" ? "success" : type === "error" ? "danger" : type === "warning" ? "warning" : undefined, onClose: resolve }));
        });
    };
    return config;
}
exports.notifySnackbar = notifySnackbar;
