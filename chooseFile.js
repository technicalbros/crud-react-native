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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_image_picker_1 = __importDefault(require("react-native-image-picker"));
function chooseFile($config) {
    $config.callbacks.chooseFile = function (options) {
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            var defaultOptions = __assign({ title: 'Select Image', storageOptions: {
                    skipBackup: true,
                    path: 'images',
                } }, options);
            react_native_image_picker_1.default.showImagePicker(defaultOptions, function (response) {
                if (response.didCancel || response.error) {
                    reject(response);
                }
                else {
                    resolve(__assign({}, response, { type: response.type || 'image/jpeg', url: response.uri, name: response.fileName }));
                }
            });
        });
    };
    return $config;
}
exports.default = chooseFile;
