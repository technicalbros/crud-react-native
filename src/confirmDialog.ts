import {RequestOptions} from "@crud/core";
import {Alert} from "react-native";

export default function notifyAlert(config: RequestOptions) {

    config.callbacks.confirm = async ({title = "Are you sure?", textContent = "This may not be reversible", confirmButtonText = "Yes I'm", cancelButtonText = "No I'm not", options} = {}) => {
        return new Promise((resolve, reject) => {
            Alert.alert(title, textContent, [
                {
                    text: confirmButtonText,
                    onPress: resolve
                },
                {
                    text: cancelButtonText,
                    onPress: reject
                }
            ], {...options, cancelable: true})
        })
    };

    return config;
}
