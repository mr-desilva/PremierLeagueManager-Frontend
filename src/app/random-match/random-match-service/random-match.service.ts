import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatchInterface} from "../../PlayedMatch-list/playedmatch-list-service/match-Interface";

@Injectable({
  providedIn: 'root'
})
export class RandomMatchService {

  constructor(private http:HttpClient) { }
  private url : any = "http://localhost:9000/RandomMatch"; //backend url for getting random match data
  //Getting the Match objects to the array of match interface through http request
  getRandomMatch(){
    return this.http.get<MatchInterface[]>(this.url);
  }
}
