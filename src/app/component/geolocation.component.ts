import {Component, OnDestroy, OnInit} from "@angular/core";
import {GeoLocationService} from "../service/geolocation.service";
import {MatSlideToggleChange, MatSnackBar} from "@angular/material";
import {Subscription} from "rxjs/Subscription";

@Component({
    templateUrl: './geolocation.component.html'
})
export class GeolocationComponent implements OnInit, OnDestroy {

    public position: Position;

    public positionOptions: PositionOptions = {
        timeout: 60000,
        enableHighAccuracy: false,
        maximumAge: 60000
    };

    private positionSubscription: Subscription;

    constructor(private geoLocationService: GeoLocationService, private snackBar: MatSnackBar) {
    }

    public ngOnInit() {
        this.restart();
    }

    public ngOnDestroy() {
        this.positionSubscription.unsubscribe();
    }

    public getCurrentPosition() {
        this.geoLocationService.getCurrentPosition()
            .then((position) => {
                this.position = position;
                console.log(position)
            })
            .catch((error) => {
                console.log(error);
                this.snackBar.open(error.message, null, {duration: 5000});
            });
    }

    private restart() {
        this.position = null;
        if (null != this.positionSubscription) {
            this.positionSubscription.unsubscribe();
            this.positionSubscription = null;
        }

        this.positionSubscription = this.geoLocationService.watchPosition(this.positionOptions).subscribe(
            (position) => {
                console.log('New Position', position);
                this.position = position;
            },
            (error) => {
                console.error(error);
                this.snackBar.open(error.message, null, {duration: 5000})
            }
        );
    }

    public setAccuracy(changeEvent: MatSlideToggleChange) {
        this.positionOptions.enableHighAccuracy = changeEvent.checked;
        this.restart();
    }
}
