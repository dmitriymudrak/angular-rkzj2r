import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../modules/passenger-interface';

@Component({
    selector: 'passenger-viewer',
    styleUrls:['passenger-viewer.component.scss'],
    template: `
    <div>
        <passenger-form
        [detail]=passenger
        (update)="handleUpdate($event)">
        </passenger-form>
    </div>
    `
})

export class PassengerViewerComponent implements OnInit {
    
passenger: Passenger | undefined;

    ngOnInit(): void {
        this.passengerService
        .getPassenger(1)
        .subscribe((data: Passenger) => this.passenger = data);
    } 

    constructor(private passengerService: PassengerDashboardService){
    }

    handleUpdate(event: Passenger){
        console.log(event);
        this.passengerService.updatePassenger(event)
        .subscribe((response) => {
            this.passenger = Object.assign({}, this.passenger, event);
        });
    }
} 