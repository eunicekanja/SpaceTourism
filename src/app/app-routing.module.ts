import { NgModule, PLATFORM_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewItemComponent } from './crew-item/crew-item.component';
import { CrewComponent } from './crew/crew.component';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { PlanetComponent } from './planet/planet.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'destination',
    component:DestinationComponent,
    children:[
       {
         path:':name',
         component:PlanetComponent
       },
       {
         path:'* *',
         component:PlanetComponent,
       }

    ]
  },
  {
    path:'crew',
    component:CrewComponent,
    children:[
      {
        path:':name',
        component:CrewItemComponent,
      },
      {
        path:'* *',
        component:CrewItemComponent,
      },
      {
        path:'* *',
        redirectTo:'/crew',
        pathMatch:'full'
        
      }
    ]
  },
  {
    path:'tech',
    component:TechComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

