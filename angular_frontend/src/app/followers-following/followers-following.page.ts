import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../games-service.service';
import { getPlayers } from '@angular/core/src/render3/players';

@Component({
  selector: 'app-followers-following',
  templateUrl: './followers-following.page.html',
  styleUrls: ['./followers-following.page.scss'],
})
export class FollowersFollowingPage implements OnInit {

  playerSelected: PlayerClass;
  players: PlayerClass[];

  constructor(private activateRoute: ActivatedRoute,private apiService: GamesServiceService ) {
    this.activateRoute.params.subscribe(param => {
      this.playerSelected = <PlayerClass>param;
      console.log(this.playerSelected);     
    });
    this.getPlayers();
   }


   public getPlayers(){
    this.apiService.getPlayers().subscribe(async playersArray => {
      this.players = playersArray;
      for( var i = this.players.length-1; i--;){
        if ( this.players[i]._id ===  this.playerSelected._id) this.players.splice(i, 1);
        }
      console.log(this.players);
    })    
  }

  followPlayer(player){
    console.log(this.playerSelected._id +" following:" + player._id);
    console.log(player);
    this.apiService.followPlayer(this.playerSelected._id, player._id);
  }

  ngOnInit() {
  }

}
