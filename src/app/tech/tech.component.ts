import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AllDataService } from '../all-data.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  tech=this.allData.technology;
  name: any
  image: any
  desc: any
  
  constructor(private allData:AllDataService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {let params=this.activeRoute.firstChild?.snapshot.params['id']
    this.activeRoute.firstChild?.params.subscribe(
      (param:Params)=>{
        params=param['id']
        console.log(params)
      }
    )
    console.log(params)
    const techitem=this.tech[0];
    this.name=techitem.name;
    this.image=techitem.images.landscape;
    this.desc=techitem.description
  }
  changeTech(id:any){
    const techItem=this.tech[id-1];
    this.name=techItem.name;
    this.image=techItem.images.landscape;
    this.desc=techItem.description
  }
}
