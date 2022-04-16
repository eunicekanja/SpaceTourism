import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllDataService } from '../all-data.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  id: number=0;
  planetItem: any;
  name:any;
  planetList=this.allData.planetList;
  destinationList=this.allData.destinations;
  desc: any;
  img: any;
  distance: any;
  travel: any;
  constructor(private allData:AllDataService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.activeRoute.params)
  }
  goPlanet(id:number){
    this.id=+id;
    this.planetItem=this.destinationList[id]
    this.name=this.planetItem.name;
    this.desc=this.planetItem.description,
    this.img=this.planetItem.images.png,
    this.distance=this.planetItem.distance,
    this.travel=this.planetItem.travel
    console.log(this.planetItem.name)
  }
}
