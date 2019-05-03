import { GamesServiceService } from './../games-service.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../models/Game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.page.html',
  styleUrls: ['./add-game.page.scss'],
})
export class AddGamePage implements OnInit {

  game: Game;

  constructor(private apiService :GamesServiceService) {

   }

   addGame(form){
    this.game = form.value;
    console.log(this.game);
    //alert("The form was submitted");
    form.reset();
    this.apiService.saveGameToDB(this.game);
   }


  ngOnInit() {
  }

}
