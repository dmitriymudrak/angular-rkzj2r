import { Injectable } from '@angular/core';
import { Passenger } from './modules/passenger-interface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



const PASSENGER_API: string = '/api/passengers';


@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) { 
    console.log(this.http);
  }

  getPassenger() : Observable<Passenger> {
    return 
}
}