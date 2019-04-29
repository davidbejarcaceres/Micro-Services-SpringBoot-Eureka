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

  constructor(private gamesServiceRepo: GamesServiceService ) {
    this.getGames();
   }

  public addGameToPlayer(game: Game){
    /*TODO: Asigns game to player by passing player ID and Game ID
    PUT http:localhost:SERVICE-PORT/APIPATH/player/{playerID}/game/{gameID}      */
    console.log(game._id);
    var player_id_test = "23213322323232323";
    console.log(player_id_test);
    
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
