import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../component/home.component";
import {GeolocationComponent} from "../component/geolocation.component";
import {VibrationComponent} from "../component/vibration.component";
import {ResumepauseComponent} from "../component/resumepause.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'geolocation', component: GeolocationComponent},
    {path: 'vibration', component: VibrationComponent},
    {path: 'resumepause', component: ResumepauseComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
