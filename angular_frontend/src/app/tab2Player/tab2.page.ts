import { Component } from '@angular/core';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { ActivatedRoute } from '@angular/router';
import { GamesServiceService } from '../games-service.service';
import { Game } from '../models/Game';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  player: PlayerClass;
  name: string;
  lastname: string;
  age: string;
  games: Game[];
  following: [];
  followers: [];
  playerID: string;
  

  constructor(public activatedRoute: ActivatedRoute, private apiService: GamesServiceService, private router: Router) {
    console.log("TAB 2 LOADED CONSTRUCTOR  ");  
  }
  public getFirstPlayer(){
 
 }
  // List the games of the player
  myGames(){
  }

  ngOnInit() {
    this.apiService.getFirstPlayer().subscribe(async firstPlayer => {
      this.player = <PlayerClass>firstPlayer;
    }); 
  }
}
