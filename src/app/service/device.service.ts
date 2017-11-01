import {Injectable} from "@angular/core";

@Injectable()
export class DeviceService {

    public deviceReady(): Promise<boolean> {
        return new Promise(resolve => {
            if (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1) {
                console.log("URL: Running in Cordova/PhoneGap");
                document.addEventListener("deviceready", () => resolve(true), false);
            } else {
                console.log("URL: Running in browser");
                resolve(true);
            }
        });
    }
}
