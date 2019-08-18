import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TrafficIntersectionSignalComponent } from './traffic-Intersection-signal/traffic-Intersection-signal.component';
import { TrafficsignalService } from './trafficsignal.service';
import { SpellCheckModule } from 'ng-spell-check';


@NgModule({
  declarations: [
    AppComponent,
    TrafficIntersectionSignalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SpellCheckModule
  ],
  providers: [TrafficsignalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
