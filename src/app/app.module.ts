import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechComponent } from './tech/tech.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AllDataService } from './all-data.service';
import { PlanetComponent } from './planet/planet.component';
import { CrewItemComponent } from './crew-item/crew-item.component';
import { TechItemComponent } from './tech-item/tech-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    CrewComponent,
    TechComponent,
    MainHomeComponent,
    PlanetComponent,
    CrewItemComponent,
    TechItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AllDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
