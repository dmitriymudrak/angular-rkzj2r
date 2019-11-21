import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../modules/passenger-interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { Observable } from "rxjs/Observable";
@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <passenger-count [items]="passengers"></passenger-count>
      <div>
        <li *ngFor="let passenger of passengers">{{ passenger.fullname }}</li>
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (remove)="handleRemove($event)"
        (edit)="handleEdit($event)"
      ></passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService) {
    this.passengers = [];
  }

  ngOnInit() {
    
     var res = this.passengerService
      .getPassenger()
      .subscribe((data: Passenger[]) => {
       this.passengers = data;
      });
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id == event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });

    console.log(this.passengers);
  }
}
