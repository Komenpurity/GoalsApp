import { Component, OnInit } from '@angular/core';
import { IGoals } from './goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
   showDescription: boolean = false
  goals: IGoals[] = [
    {
      "id": 1,
      "name":'Watch finding Nemo',
      "description":"Find an online version and watch merlin find his son",
      "completeDate":new Date(2020,3,14)
    },
    {
      "id":2,
      "name":'Buy Cookies',
      "description":"I have to buy cookies for the parrot",
      "completeDate":new Date(2019,6,9)
    },
    {
      "id":3,
      "name":'Get new Phone Case',
      "description":"Diana has her birthday coming up soon",
      "completeDate":new Date(2022,1,12)
    },
    {
      "id":4,
      "name":'Get Dog Food',
      "description":"Pupper likes expensive sancks",
      "completeDate":new Date(2022,1,12)
    },
    {
      "id":5,
      "name":'Solve math homework',
      "description":"Damn Math",
      "completeDate":new Date(2019,2,14)
    },
    {
      "id":6,
      "name":'Plot my world domination plan',
      "description":"Cause I am an evil overlord",
      "completeDate":new Date(2030,3,14)
    },
  ];

  toggleDescription(): void {
    this.showDescription =! this.showDescription;
  }
  ngOnInit(): void {
  }

}
