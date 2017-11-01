import {Injectable} from "@angular/core";

@Injectable()
export class VibrationService {

    public vibrate(pattern: number | number[]) {
        navigator.vibrate(pattern);
    }

    public cancel() {
        navigator.vibrate(0);
    }
}
