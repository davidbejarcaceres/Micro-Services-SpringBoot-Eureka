import { Component, OnInit } from '@angular/core';
import { Game } from '../models/Game';
import { ActivatedRoute } from '@angular/router';
import { GamesServiceService } from '../games-service.service';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.page.html',
  styleUrls: ['./my-games.page.scss'],
})
export class MyGamesPage implements OnInit {

  player: [];
  name: string;
  lastname: string;
  age: string;
  games: Game[];
  

  constructor(private apiService: GamesServiceService, public activatedRoute: ActivatedRoute) {
    this.apiService.getFirstPlayer().subscribe(async firstPlayer => {
      console.log("CARGA TAB 2");
      this.player = firstPlayer.json() ;
      this.name = firstPlayer.json().name;
      this.lastname = firstPlayer.json().lastname;
      this.age = firstPlayer.json().age;
      this.games = firstPlayer.json().games;     
      console.log(this.player);    
    }); 
   }

  ngOnInit() {
  }

}
