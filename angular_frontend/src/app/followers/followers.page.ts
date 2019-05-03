import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesServiceService } from '../games-service.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {

  playerSelected: PlayerClass;
  followersIdList: [];


  constructor(private activateRoute: ActivatedRoute,private apiService: GamesServiceService ) {
    this.apiService.getFirstPlayer().subscribe(async firstPlayer => {
      this.playerSelected = <PlayerClass>firstPlayer;
      console.log(this.playerSelected);
      this.apiService.getFollowersById(this.playerSelected._id).subscribe(async listFollowers => {
        this.followersIdList = listFollowers;
      });
    });
   }


   clickPlayer(player: PlayerClass){

   }

   public getFollowers(){

  }

  ngOnInit() {
  }

}

