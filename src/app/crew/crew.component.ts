import { Component, OnInit } from '@angular/core';
import { AllDataService } from '../all-data.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew:any=this.allData.crew;
  name: any;
  role:any;
  bio:any;
  img!: string; 
  InitialCount=0;
  constructor(private allData:AllDataService) { }
  ngOnInit(): void {
    const InitialPerson=this.crew[0];
    this.name=InitialPerson.name;
    this.role=InitialPerson.role;
    this.bio=InitialPerson.bio;
    this.img=InitialPerson.images.png;
  }
  clickDot(e:any){
    const crewId=e.target.dataset.id;
    const person=this.crew[crewId-1];
    this.name=person.name;
    this.role=person.role;
    this.bio=person.bio;
    this.img=person.images.png;
  }
  clickDot2(id:number){
    const person1=this.crew[id-1];
    this.name=person1.name;
    this.role=person1.role;
    this.bio=person1.bio;
    this.img=person1.images.png;
    console.log(id)
  }
}


