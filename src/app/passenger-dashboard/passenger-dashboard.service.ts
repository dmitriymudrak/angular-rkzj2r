import { Injectable } from "@angular/core";
import { Passenger } from "./modules/passenger-interface";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const PASSENGER_API: string = "http://localhost:3000/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) { }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(PASSENGER_API).map((response: Response) => {
      return response.json();
    });
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger)
    .map((response: Response) => response.json());
  }
}
