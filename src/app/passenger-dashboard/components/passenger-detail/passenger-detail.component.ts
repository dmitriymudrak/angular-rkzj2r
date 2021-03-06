import { Component, Input, Output, OnChanges, OnInit,  EventEmitter } from '@angular/core';
import { Passenger } from '../../modules/passenger-interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: 
  `
    <div>
    <span class="status" [class.checked-in] = "detail.checkedId"></span>
         <div *ngIf="editing">
          <input type="text" 
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name>
         </div>
         <div *ngIf="!editing">{{ detail.fullname }}</div>
        <div class="date">
          Check in date:
          {{ detail.checkInDate ? (detail.checkInDate | date:'medium') : '' }}
        </div>
        <button (click)="toggleEdit()">
        {{editing ? 'Done' : 'Edit'}}
        </button>

        <button (click)="onRemove()">
          Remove
        </button>
    </div>
  `
})

export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  detail: Passenger;
  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;
  
  ngOnChanges(changes){
    if(changes.detail){
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log('on changes', changes);
  }

  ngOnInit(){
    console.log('ng on init');
  }

  onNameChange(value:string){
    this.detail.fullname = value;
    
  }

  toggleEdit(){
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove(){
    this.remove.emit(this.detail);
  }


}