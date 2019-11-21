import { Injectable } from "@angular/core";
import { Passenger } from "./modules/passenger-interface";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

const PASSENGER_API: string = "http://localhost:3000/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {
    console.log(this.http);
  }

  getPassenger(): Observable<Passenger> {
    return this.http.get(PASSENGER_API).map((response: Response) => {
      return response.json();
    });
  }
}
