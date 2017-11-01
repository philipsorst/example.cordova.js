import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DeviceService {

    private resumeSubject: Subject<Date> = new Subject();

    private pauseSubject: Subject<Date> = new Subject();

    constructor() {
        this.deviceReady().then(() => {
            document.addEventListener("pause", () => {
                console.log('pause');
                this.pauseSubject.next(new Date());
            }, false);
            document.addEventListener("resume", () => {
                console.log('resume');
                this.resumeSubject.next(new Date());
            }, false);
        });
    }

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

    public getPauseObservable(): Observable<Date> {
        return this.pauseSubject;
    }

    public getResumeObservable(): Observable<Date> {
        return this.resumeSubject;
    }
}
