import {RequestOptions} from "@crud/core";
import {Alert} from "react-native";

export default function notifyAlert(config: RequestOptions) {

    config.callbacks.alert = ({title, textContent, options} = {}) => new Promise(resolve => {
        const {buttons, ...otherOptions}: any = options || {};
        Alert.alert(title, textContent, buttons, ...otherOptions);
        resolve();
    })

    return config;
}
