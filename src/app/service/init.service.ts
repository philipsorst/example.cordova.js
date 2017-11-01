import {Injectable} from "@angular/core";
import {DeviceService} from "./device.service";

@Injectable()
export class InitService {

    constructor(private deviceService: DeviceService) {
    }

    public initialize(): Promise<any> {
        return this.deviceService.deviceReady();
    }
}