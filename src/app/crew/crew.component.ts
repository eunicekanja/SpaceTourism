import { Component, OnInit } from '@angular/core';
import { AllDataService } from '../all-data.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew:any=this.allData.crew;
  constructor(private allData:AllDataService) { }
  ngOnInit(): void {}
  clickDot(e:any){
    const crewId=e.target.dataset.id;
    const person=this.crew[crewId-1].name;
    const crewPerson=this.allData.getCrew(crewId-1)
    console.log(crewId)
    console.log(person)
  }
}


