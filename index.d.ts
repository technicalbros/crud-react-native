declare global {
    interface FormData {
        merge(data: any): this;
    }
    class File {
        name: string;
        uri: string;
        url: string;
        type: string;
    }
    interface URLSearchParams {
        merge(data: any): this;
    }
}
export { default as fetchRequest } from "./fetchRequest";
export { default as chooseFile } from "./chooseFile";
export { default as notifySnackbar } from "./notifySnackbar";
export { default as notifyAlert } from "./notifyAlert";
