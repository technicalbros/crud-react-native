import {CrudRequest, RequestOptions} from "@crud/core";
import * as _ from "lodash";
import URLSearchParams from "url-search-params";

export default function fetchRequest(this: CrudRequest, config: RequestOptions) {

    const {callbacks} = config;

    callbacks.sendRequest = async function (options: RequestOptions) {

        const config = {
            ...this.defaultConfig,
            ...options,
        }

        let {
            data,
            url,
            method = "get",
            baseUrl = "",
            prefix = "",
            suffix = "",
            extension = "",
            showProgress = true,
            checkDataType = true,
            notify = true,
            ajaxOptions,
            callbacks
        } = config;


        let requestOptions: RequestInit = {
            ...ajaxOptions,
            method: method,
            credentials: "include"
        }

        let _url = baseUrl + prefix + url + suffix + extension;

        if (callbacks.transformParams) {
            data = this.call("transformParams", [data])
        }

        if (!_.isEmpty(data)) {
            if (method.toLowerCase() === 'post') {
                if (!(data instanceof FormData)) {
                    requestOptions.body = new FormData().merge(data);
                }
            } else {
                const params = new URLSearchParams().merge(data);
                _url += "?" + params;
            }

            if (requestOptions.body instanceof FormData) {
                requestOptions.headers = {
                    'Content-Type': 'multipart/form-data',
                }
            }
        }

        this.toggleLoading(true);
        let responseText;

        try {
            let res = await fetch(_url, requestOptions)

            showProgress && this.toggleLoading(false);

            if (res.status === 200) {
                responseText = await res.text()
            } else {
                throw {
                    error: res,
                    message: `${res.status} : ${res.statusText || 'Server Error'}`
                }
            }

            let response: { type: "success" | "error", message: string };

            try {
                response = JSON.parse(responseText);
            } catch (e) {
                response = responseText;
            }

            if (callbacks.transformResponse) {
                this.call("transformResponse", [response])
            }

            if (method.toLowerCase() === 'get') {
                return response;
            } else {

                notify && this.notify({
                    type: response.type,
                    message: response.message
                });

                if (!checkDataType || this.call("checkSuccess", [response])) {
                    return response;
                } else {
                    throw response;
                }
            }
        } catch (error) {
            showProgress && this.toggleLoading(false);

            notify && this.notify({
                type: "error",
                message: error.message
            });

            throw error;
        }

    }

    return config;
}
