"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var URLSearchParams = require("url-search-params");
var isFile = function (value) {
    if (value.uri && value.name && value.type) {
        return true;
    }
    else {
        return false;
    }
};
var mergeData = function (formData, data, key) {
    if (_.isObject(data) && !isFile(data)) {
        _.each(data, function (value, _key) {
            var name = key ? key + "[" + _key + "]" : _key;
            mergeData(formData, value, name);
        });
    }
    else if (key && data !== undefined) {
        formData.append(key, (data !== false && !data) ? "" : data);
    }
};
FormData.prototype.merge = function (data) {
    mergeData(this, data);
    return this;
};
URLSearchParams.prototype.merge = function (data) {
    mergeData(this, data);
    return this;
};
var fetchRequest_1 = require("./fetchRequest");
exports.fetchRequest = fetchRequest_1.default;
var chooseFile_1 = require("./chooseFile");
exports.chooseFile = chooseFile_1.default;
var notifySnackbar_1 = require("./notifySnackbar");
exports.notifySnackbar = notifySnackbar_1.default;
var notifyAlert_1 = require("./notifyAlert");
exports.notifyAlert = notifyAlert_1.default;
