import {RequestOptions} from "@crud/core";
import {Alert} from "react-native";

export default function notifyAlert(config: RequestOptions) {

    config.callbacks.confirm = async ({title = "Are you sure?", textContent = "This may not be reversible", options} = {}) => {
        return new Promise((resolve, reject) => {
            Alert.alert(title, textContent, [
                {
                    text: "Yes I'm",
                    onPress: resolve
                },
                {
                    text: "No I'm not",
                    onPress: reject
                }
            ], {...options, cancelable: true})
        })
    }

    return config;
}
