import { Game } from './../models/Game';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
})
export class GameDetailPage implements OnInit {

  game: Game;

  constructor(public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      this.game = <Game>param;        
    });
   }

  deleteGame(){
    //TODO Add here DELETE method to the micro-service "gestor_juegos"
  }

  updateGame(){
    //TODO Add PUT here the Update method to the micro-service "gestor_juegos"
  }

  ngOnInit() {
  }

}
