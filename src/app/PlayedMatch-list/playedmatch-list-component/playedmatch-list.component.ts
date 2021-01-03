import { Component, OnInit } from '@angular/core';
import {MatchInterface} from "../playedmatch-list-service/match-Interface";
import {MatchListService} from "../playedmatch-list-service/match-list.service";

@Component({
  selector: 'app-playedmatch-list-component',
  templateUrl: './playedmatch-list.component.html',
  styleUrls: ['./playedmatch-list.component.css']
})
export class PlayedmatchListComponent implements OnInit {
  serviceGetMatch: MatchInterface[] = []; // Creating a array of  Match interface
  constructor(public matchService : MatchListService) { }
  //Invoking the backend loadMatchData method from the match-list service and assigning output to the serviceGetMatch array
  ngOnInit(): void {
    this.matchService.getMatchList().subscribe((outputMatch) => {
      this.serviceGetMatch = outputMatch;
    })
  }
}
