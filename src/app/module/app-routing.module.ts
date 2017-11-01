import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../component/home.component";
import {GeolocationComponent} from "../component/geolocation.component";
import {VibrationComponent} from "../component/vibration.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'geolocation', component: GeolocationComponent},
    {path: 'vibration', component: VibrationComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
