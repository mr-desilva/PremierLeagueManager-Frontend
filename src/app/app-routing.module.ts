import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FootballClubComponent} from "./FootballClub-list/football-club-component/football-club.component";
import {PlayedmatchListComponent} from "./PlayedMatch-list/playedmatch-list-component/playedmatch-list.component";
import {RandomMatchComponent} from "./random-match/random-match-component/random-match.component";
import {SearchComponent} from "./Search-Match/search/search.component";

const routes: Routes = [
  {path: 'footballClubList', component: FootballClubComponent},
  {path: 'matchList', component: PlayedmatchListComponent},
  {path: 'playRandom', component:RandomMatchComponent},
  {path: 'searchMatch', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [FootballClubComponent,PlayedmatchListComponent,RandomMatchComponent,SearchComponent]
