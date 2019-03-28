import {RequestOptions} from "@crud/core";
import {Alert} from "react-native";

export default function notifyAlert(config: RequestOptions) {

    config.callbacks.notify = ({message, type, options}) => new Promise(resolve => {
        const {buttons, ...otherOptions} = options;
        Alert.alert(type.toUpperCase(), message, buttons, ...otherOptions,);
    })

    return config;
}
