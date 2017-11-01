import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GeoLocationService {

    public getCurrentPosition(geolocationOptions: PositionOptions = {
        timeout: 10000,
        enableHighAccuracy: true
    }): Promise<Position> {
        return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        resolve(position);
                    },
                    (error) => {
                        reject(error);
                    },
                    geolocationOptions
                );
            }
        );
    }

    public watchPosition(positionOptions: PositionOptions = {}): Observable<Position> {
        return Observable.create(observer => {

            const onSuccess: PositionCallback = (pos: Position) => {
                observer.next(pos);
            };

            const onError: PositionErrorCallback = (error) => {
                observer.error(error);
            };

            const watcher: number = navigator.geolocation.watchPosition(onSuccess, onError, positionOptions);
            return () => {
                navigator.geolocation.clearWatch(watcher);
            };
        });
    }
}
