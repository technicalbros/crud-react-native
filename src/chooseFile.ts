import {CrudRequest, RequestOptions} from "@crud/core";
import ImagePicker from 'react-native-image-picker';

export default function chooseFile(this: CrudRequest, $config: RequestOptions) {

    $config.callbacks.chooseFile = options => new Promise<File>((resolve, reject) => {

        const defaultOptions = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            ...options
        };

        ImagePicker.showImagePicker(defaultOptions, (response) => {
            if (response.didCancel || response.error) {
                reject(response);
            } else {
                resolve({
                    ...response,
                    type: response.type || 'image/jpeg',
                    url: response.uri,
                    name: response.fileName
                });
            }
        });

    })

    return $config;
}
