import * as _ from "lodash";
import URLSearchParams = require("url-search-params");

declare global {
    interface FormData {
        merge(data: any): this
    }

    class File {
        name: string
        uri: string
        url: string
        type: string
    }

    interface URLSearchParams {
        merge(data: any): this
    }
}

const isFile = value => {
    if (value.uri && value.name && value.type) {
        return true;
    } else {
        return false;
    }
}


const mergeData = (formData: FormData | URLSearchParams, data: any, key?: string) => {
    if (_.isObject(data) && !isFile(data)) {
        _.each(data, (value, _key) => {
            const name = key ? `${key}[${_key}]` : _key;
            mergeData(formData, value, name);
        })
    } else if (key && data !== undefined) {
        formData.append(key, (data !== false && !data) ? "" : data);
    }
}

FormData.prototype.merge = function (data: Object) {
    mergeData(this, data);
    return this;
}

URLSearchParams.prototype.merge = function (data: Object) {
    mergeData(this, data);
    return this;
}

export {default as fetchRequest} from "./fetchRequest";
export {default as chooseFile} from "./chooseFile";
export {default as notifySnackbar} from "./notifySnackbar"
export {default as notifyAlert} from "./notifyAlert"
