import {Toast} from "native-base";
import {CrudRequest, RequestOptions} from "@crud/core";

export function notifySnackbar(this: CrudRequest, config: RequestOptions) {

    config.callbacks.notify = ({message, type, options}) => new Promise(resolve => {
        Toast.show({
            buttonText: "Hide",
            ...options,
            text: message,
            type: type === "success" ? "success" : type === "error" ? "danger" : type === "warning" ? "warning" : undefined,
            onClose: resolve
        })
    })

    return config;
}
