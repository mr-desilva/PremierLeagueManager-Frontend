import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Ng2OrderModule} from "ng2-order-pipe";
import { RandomMatchComponent } from './random-match/random-match-component/random-match.component';
import { SearchComponent } from './Search-Match/search/search.component';
import {FormsModule} from "@angular/forms";
import {PlayedmatchListComponent} from "./PlayedMatch-list/playedmatch-list-component/playedmatch-list.component";

// Declare all the components here
@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    RandomMatchComponent,
    SearchComponent,
    PlayedmatchListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
