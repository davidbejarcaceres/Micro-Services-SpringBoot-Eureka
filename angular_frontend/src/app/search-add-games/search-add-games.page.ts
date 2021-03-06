import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../games-service.service';
import { Game } from '../models/Game';

@Component({
  selector: 'app-search-add-games',
  templateUrl: './search-add-games.page.html',
  styleUrls: ['./search-add-games.page.scss'],
})
export class SearchAddGamesPage implements OnInit {

  games = [];
  player: [];
  urlServicioPlayers:string;

  constructor(private gamesServiceRepo: GamesServiceService, private activaterouter: ActivatedRoute ) {
    this.gamesServiceRepo.getURLPivote("CLIENT-GESTIONAR-JUEGOS").subscribe(async url => {
      var urlFinal = url._body + "/games";
      this.urlServicioPlayers = urlFinal;
    })
    this.getGames();
   }

  public addGameToPlayer(game: Game){
    /*TODO: Asigns game to player by passing player ID and Game ID
    PUT http:localhost:SERVICE-PORT/APIPATH/player/{playerID}/game/{gameID}      */
    console.log("game ID added: "+ game._id);
    var player_id = this.activaterouter.snapshot.paramMap.get("_id");
    console.log("Player ID: "+ player_id);
    this.gamesServiceRepo.assignGametoPlayer(player_id, game._id);
  }

  public getGames(){
    this.gamesServiceRepo.getGames().subscribe(async reposArray => {
      this.games = <Game[]>reposArray;
      console.log(this.games);
      
    })    
  }

  ngOnInit() {
  }

}
