import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from './../games-service.service';
import { Game } from '../models/Game';


@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  games = [];
  urlServicioPlayers:string;

  constructor(private gamesServiceRepo: GamesServiceService ) {
    // this.gamesServiceRepo.getURLPivote("CLIENT-GESTIONAR-JUEGOS").subscribe(async url => {
    //   var urlFinal = url._body + "/games";
    //   this.urlServicioPlayers = urlFinal;
    // })
    this.getGames();
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
