import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesServiceService } from '../games-service.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {

  playerSelected: PlayerClass;
  players: PlayerClass[];
  followingIdList: [];
  listPlayerObjects: PlayerClass[];
  followersIdList: [];


  constructor(private activateRoute: ActivatedRoute,private apiService: GamesServiceService ) {
    this.getFollowing();
    this.getFollowers();
   }


   unfollowPlayer(player: PlayerClass){
     console.log("CLICK: " + player.name);
     console.log(player._id);

     for( var i = this.followingIdList.length-1; i--;){
      if (this.listPlayerObjects[i]._id ===  player._id) this.followingIdList.splice(i, 1);
      }

     this.apiService.unfollowPlayer(this.playerSelected._id ,player._id);
   }

   public getFollowers(){
    this.apiService.getFirstPlayer().subscribe(async firstPlayer => {
      this.playerSelected = <PlayerClass>firstPlayer;
      console.log(this.playerSelected);
      this.apiService.getFollowersById(this.playerSelected._id).subscribe(async listFollowers => {
        this.followersIdList = listFollowers;
      });
    });
  }


  getFollowing(){
    this.apiService.getFirstPlayer().subscribe(async firstPlayer => {
      this.playerSelected = <PlayerClass>firstPlayer;
      console.log(this.playerSelected);
      this.apiService.getFollowingById(this.playerSelected._id).subscribe(async followingPlayers => {
        this.followingIdList = followingPlayers;
        console.log("LISTA: ");
        console.log(this.followingIdList);
        this.listPlayerObjects = this.followingIdList;
        this.apiService.presentToast("Unfollow Player: ", " Swipe right!");                            
      });
    });
  }



  onClickFollower(player){
    this.apiService.presentToast(player.name, " Is Following you!");
  }

  onClickFollwing(player){
    this.apiService.presentToast("To unfollow "+ player.name, " Swipe right and press button");
  }

  ngOnInit() {
  }

}
