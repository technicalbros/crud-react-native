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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var url_search_params_1 = __importDefault(require("url-search-params"));
function fetchRequest(config) {
    var callbacks = config.callbacks;
    callbacks.sendRequest = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, data, url, _a, method, _b, baseUrl, _c, prefix, _d, suffix, _e, extension, _f, showProgress, _g, checkDataType, _h, notify, ajaxOptions, callbacks, requestOptions, _url, params, responseText, res, response, error_1;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        config = __assign({}, this.defaultConfig, options);
                        data = config.data, url = config.url, _a = config.method, method = _a === void 0 ? "get" : _a, _b = config.baseUrl, baseUrl = _b === void 0 ? "" : _b, _c = config.prefix, prefix = _c === void 0 ? "" : _c, _d = config.suffix, suffix = _d === void 0 ? "" : _d, _e = config.extension, extension = _e === void 0 ? "" : _e, _f = config.showProgress, showProgress = _f === void 0 ? true : _f, _g = config.checkDataType, checkDataType = _g === void 0 ? true : _g, _h = config.notify, notify = _h === void 0 ? true : _h, ajaxOptions = config.ajaxOptions, callbacks = config.callbacks;
                        requestOptions = __assign({}, ajaxOptions, { method: method, credentials: "include" });
                        _url = baseUrl + prefix + url + suffix + extension;
                        if (callbacks.transformParams) {
                            data = this.call("transformParams", [data]);
                        }
                        if (!_.isEmpty(data)) {
                            if (method.toLowerCase() === 'post') {
                                if (!(data instanceof FormData)) {
                                    requestOptions.body = new FormData().merge(data);
                                }
                            }
                            else {
                                params = new url_search_params_1.default().merge(data);
                                _url += "?" + params;
                            }
                            if (requestOptions.body instanceof FormData) {
                                requestOptions.headers = {
                                    'Content-Type': 'multipart/form-data',
                                };
                            }
                        }
                        this.toggleLoading(true);
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetch(_url, requestOptions)];
                    case 2:
                        res = _j.sent();
                        showProgress && this.toggleLoading(false);
                        if (!(res.status === 200)) return [3 /*break*/, 4];
                        return [4 /*yield*/, res.text()];
                    case 3:
                        responseText = _j.sent();
                        return [3 /*break*/, 5];
                    case 4: throw {
                        error: res,
                        message: res.status + " : " + (res.statusText || 'Server Error')
                    };
                    case 5:
                        response = void 0;
                        try {
                            response = JSON.parse(responseText);
                        }
                        catch (e) {
                            response = responseText;
                        }
                        if (callbacks.transformResponse) {
                            this.call("transformResponse", [response]);
                        }
                        if (method.toLowerCase() === 'get') {
                            return [2 /*return*/, response];
                        }
                        else {
                            notify && this.notify({
                                type: response.type,
                                message: response.message
                            });
                            if (!checkDataType || this.call("checkSuccess", [response])) {
                                return [2 /*return*/, response];
                            }
                            else {
                                throw response;
                            }
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _j.sent();
                        showProgress && this.toggleLoading(false);
                        notify && this.notify({
                            type: "error",
                            message: error_1.message
                        });
                        throw error_1;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return config;
}
exports.default = fetchRequest;
