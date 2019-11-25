import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../modules/passenger-interface";
import { Baggage } from "../../modules/baggage.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form #form="ngForm" (ngSubmit)="handleSubmit(form.value, form.valid)" novalidate>
      <div>
        Passenger name:
        <input type="text" 
        name="fullname" 
        #fullname="ngModel"
        required
        [ngModel]="detail?.fullname" />
        <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
            Passenger name is required
        </div>
      </div>

      <div>
        Passenger ID:
        <input type="number" 
        name="id" 
        required
        #id="ngModel"
        [ngModel]="detail?.id" />
        <div>
        
        <div *ngIf="id.errors?.required && id.dirty" class="error">
            Passenger ID is required
        </div>
        
        </div>
       
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedId"
            (ngModelChange)="toggleCheckedIn($event)"
          />
          </label>
      </div>
        <div *ngIf="form.value.checkedIn"> 
            Check in date: 
            <input type="number"
            name="checkInDate"
            [ngModel]="detail?.checkInDate" />
        </div>
        
        <div>
            Luggage: 
            <select name="baggage" [ngModel]="detail?.baggage">
                <option *ngFor="let item of baggage"
                [value]="item.key"
                [selected] = "item.key === detail?.baggage"
                >
                {{item.value}}
                </option>
            </select>
        </div>
        <button type="submit" [disabled]="!form.valid">
        Update passanger
        </button>      
      
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger | undefined;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  }, {
      key: 'handbaggage',
      value: 'Hand baggage'
  }];

  constructor() {}

  toggleCheckedIn(event: any): void {
      console.log(event);
      
  }

  handleSubmit(passenger: Passenger, valid: boolean){
      if(valid){
        this.update.emit(passenger);
      }
  }
}
