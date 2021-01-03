import { Component, OnInit } from '@angular/core';
import {MatchInterface} from "../../PlayedMatch-list/playedmatch-list-service/match-Interface";
import {RandomMatchService} from "../random-match-service/random-match.service";

@Component({
  selector: 'app-random-match',
  templateUrl: './random-match.component.html',
  styleUrls: ['./random-match.component.css']
})
export class RandomMatchComponent implements OnInit {
  serviceGetRandomMatch: MatchInterface[] = [];

  constructor(public randomMatchService: RandomMatchService) {
  }

  ngOnInit(): void {
  }
  //Invoking the backend playRandomMatch method from the random-match service and assigning output to the serviceGetRandomMatch array
  generate() {
    this.randomMatchService.getRandomMatch().subscribe((outputRandom) => {
      this.serviceGetRandomMatch = outputRandom;
    })

  }
}
