import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatchInterface} from "../../PlayedMatch-list/playedmatch-list-service/match-Interface";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  private url : any = "http://localhost:9000/MatchList"; //url for getting match data
  //This method will return all the matches from the backend
  getMatchList(){
    return this.http.get<MatchInterface[]>(this.url);
  }
  //This method will get the passing parameters from the getDate method and assign to the url parameters
  findMatchedDate(day:string,month:string,year:string){
    //This custom link will retrieve data from the backend through a http request
    return this.http.get<MatchInterface[]>("http://localhost:9000/Getmatch?day="+day+"&month="+month+"&year="+year);
  }
}
