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
    console.log("CARGA TAB 2");  
    this.apiService.getFirstPlayer().subscribe(async firstPlayer => {
      this.player = <PlayerClass>firstPlayer;
    });  
  }
  public getFirstPlayer(){
 
 }
  // List the games of the player
  myGames(){
    
  }


  searchPlayers(){
    /*TODO
    - Crate new Page
    - Call Get to micro-service "gestor_jugadores" to get all players
      by this player passing the _id of t to Mongo
    - Add a "Click to add player" functionality calling "asignar_jugadores" micro-service*/
    

  }

  searchGames(){
    /*TODO
    - Crate new Page
    - Call Get to micro-service "gestor_juegos" to get all games
    - Add a "Click to add game" functionality calling "asignar_juegos" micro-service*/
  }

}
