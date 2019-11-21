import { Component, Input } from '@angular/core';
import { Passenger } from '../../modules/passenger-interface';

@Component({
  selector: 'passenger-count',
  template: 
  `
  <h3>Airline passenger</h3>
   <div> Total passenger: {{checkedInCount()}} : {{getLength()}} </div>
  `
})

export class PassengerCountComponent {
  
  @Input()
  items: Passenger[];
  constructor(){
    
  }
  checkedInCount(): number {
    
    if(!this.items) return ;

    return this.items.filter((passenger: Passenger) => {
      return passenger.checkedIn;
    }).length;
  }

  getLength(): number{
    
    if(!this.items) return 0;

  return this.items.length;
}

}