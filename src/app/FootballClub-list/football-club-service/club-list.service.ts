import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FootballClubInterface} from "./footballClubInterface";

@Injectable({
  providedIn: 'root'
})
export class ClubListService {

  constructor(private http:HttpClient) { }
  private url : any = "http://localhost:9000/FootballClub"; //backend url for getting football clubs
  //Getting the football club objects to the array of football club interface through http request
  getFootballClubs(){
    return this.http.get<FootballClubInterface[]>(this.url);
  }

}
