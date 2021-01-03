import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatchInterface} from "./match-Interface";

@Injectable({
  providedIn: 'root'
})
export class MatchListService {

  constructor(private http:HttpClient) { }
  private url : any = "http://localhost:9000/MatchList"; //backend url for getting match data
  //Getting the Match objects to the array of match interface through http request
  getMatchList(){
    return this.http.get<MatchInterface[]>(this.url);
  }

}
