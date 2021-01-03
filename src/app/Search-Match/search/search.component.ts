import {Component, OnInit, ViewChild} from '@angular/core';
import {MatchInterface} from "../../PlayedMatch-list/playedmatch-list-service/match-Interface";
import {SearchService} from "../search-service/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  serviceSearchMatch: MatchInterface[] = [];
  constructor(public searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  //Method to display all the match data
  viewMatches(){
    this.searchService.getMatchList().subscribe((outputSearch) => {
      this.serviceSearchMatch = outputSearch;
    })
  }

  //This method will return the day, month, year from frontend and returns to the backend url
  getDate(day: any, month: any, year: any) {
    this.searchService.findMatchedDate(day.toString(), month.toString(), year.toString()).subscribe((outputFound) => {
      this.serviceSearchMatch = outputFound;
    });
  }
}

