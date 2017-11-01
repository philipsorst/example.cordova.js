import {Component, OnDestroy, OnInit} from "@angular/core";
import {DeviceService} from "../service/device.service";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";
import {VibrationService} from "../service/vibration.service";

@Component({
    templateUrl: './resumepause.component.html'
})
export class ResumepauseComponent implements OnInit, OnDestroy {

    public events = [];

    private resumeSubscription: Subscription;

    private pauseSubscription: Subscription;

    private intervalSubscription: Subscription;

    constructor(private deviceService: DeviceService, private vibrationService: VibrationService) {
    }

    public ngOnInit() {
        this.events.unshift({
            timestamp: new Date(),
            type: 'init'
        });

        this.resumeSubscription = this.deviceService.getResumeObservable().subscribe(date => {
            this.events.unshift({
                timestamp: date,
                type: 'resume'
            })
        });
        this.pauseSubscription = this.deviceService.getPauseObservable().subscribe(date => {
            this.events.unshift({
                timestamp: date,
                type: 'pause'
            })
        });

        this.intervalSubscription = Observable.interval(5000).subscribe((num) => {
            this.vibrationService.vibrate(500);
            this.events.unshift({
                timestamp: new Date(),
                type: 'interval'
            })
        })
    }

    public ngOnDestroy() {
        this.resumeSubscription.unsubscribe();
        this.pauseSubscription.unsubscribe();
        this.intervalSubscription.unsubscribe();
    }
}
