import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  RouterModule.forRoot(routes),
                  PassengerDashboardModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
