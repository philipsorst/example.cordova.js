import {Component, OnInit} from "@angular/core";
import {VibrationService} from "../service/vibration.service";
import {MatSliderChange} from "@angular/material";

@Component({
    templateUrl: './vibration.component.html'
})
export class VibrationComponent implements OnInit {

    private duration: number = 1000;

    constructor(private vibrationService: VibrationService) {

    }

    public ngOnInit() {
    }

    public changeDuration(event: MatSliderChange) {
        this.duration = event.value;
    }

    public vibrate() {
        this.vibrationService.vibrate(this.duration);
    }

    public vibrateInterval() {
        this.vibrationService.vibrate([100, 100, 100, 100, 100, 100, 500, 100, 500, 100, 500, 100, 100, 100, 100, 100, 100, 100]);
    }

    public cancel() {
        this.vibrationService.cancel();
    }
}
