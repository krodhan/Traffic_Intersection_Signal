import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/operator/map';




@Injectable()
export class TrafficsignalService {

  constructor() { }

  getLight(interval): Observable<string> {
    return Observable.interval(interval)
    .timeInterval()
    .map(time => {
      if (time.value % 3 === 2) {
        return 'green';
      } else if (time.value % 3 === 0) {
        return 'yellow';
      } else if (time.value % 3 === 1) {
        return 'red';
      }
    });
  }

}
