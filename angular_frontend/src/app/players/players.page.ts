import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../games-service.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  players = [];

  constructor(private gamesServiceRepo: GamesServiceService ) {
    this.getPlayers();
   }


   public getPlayers(){
    this.gamesServiceRepo.getPlayers().subscribe(async playersArray => {
      this.players = playersArray;
      console.log(this.players);
      
    })    
  }

  ngOnInit() {
  }

}
