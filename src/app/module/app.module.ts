import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from "../component/app.component";
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "../component/home.component";
import {InitService} from "../service/init.service";
import {DeviceService} from "../service/device.service";
import {GeoLocationService} from "../service/geolocation.service";
import {GeolocationComponent} from "../component/geolocation.component";
import {VibrationComponent} from "../component/vibration.component";
import {VibrationService} from "../service/vibration.service";

export function initServiceFactory(initService: InitService): Function {
    return () => initService.initialize();
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GeolocationComponent,
        VibrationComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSlideToggleModule,
        MatSliderModule
    ],
    providers: [
        DeviceService,
        GeoLocationService,
        VibrationService,
        InitService,
        {
            provide: APP_INITIALIZER,
            useFactory: initServiceFactory,
            deps: [InitService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
