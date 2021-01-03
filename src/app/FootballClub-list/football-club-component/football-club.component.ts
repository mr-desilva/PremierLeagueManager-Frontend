import { Component, OnInit } from '@angular/core';
import {ClubListService} from "../football-club-service/club-list.service";
import {FootballClubInterface} from "../football-club-service/footballClubInterface";

@Component({
  selector: 'app-football-club',
  templateUrl: './football-club.component.html',
  styleUrls: ['./football-club.component.css']
})

export class FootballClubComponent implements OnInit {
  serviceGetClubs: FootballClubInterface[] = []; // Creating a array of Football Club interface
  constructor(public clubService : ClubListService) {}
  //Invoking the backend listFootballClubs method from the club-list service and assigning output to the serviceGetClub array
  ngOnInit(): void {
    this.clubService.getFootballClubs().subscribe((output)=>{
      this.serviceGetClubs = output;
  })

}
  //This is to sort a table column, by default it will sort the table according to points in descending order
  key: string = 'points';
  reverse:boolean = false;
  sortByClick(key){
    this.key = key;
    this.reverse = !this.reverse
  }
}

