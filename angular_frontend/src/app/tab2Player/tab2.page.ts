import { Component } from '@angular/core';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { ActivatedRoute } from '@angular/router';
import { GamesServiceService } from '../games-service.service';
import { Game } from '../models/Game';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  player: [];
  name: string;
  lastname: string;
  age: string;
  games: Game[];
  

  constructor(public activatedRoute: ActivatedRoute, private apiService: GamesServiceService, private router: Router) {
    this.apiService.getFirstPlayer().subscribe(async firstPlayer => {
      console.log("CARGA TAB 2");
      
      this.player = firstPlayer ;
      this.name = firstPlayer.name;
      this.lastname = firstPlayer.lastname;
      this.age = firstPlayer.age;
      this.games = firstPlayer.games;      
      console.log(this.player);    
    });  
  }
  public getFirstPlayer(){
 
 }
  // List the games of the player
  myGames(){
    
  }


  searchPlayers(){
    /*TODO
    - Crate new Page
    - Call Get to micro-service "gestor_jugadores" to get all players
      by this player passing the _id of t to Mongo
    - Add a "Click to add player" functionality calling "asignar_jugadores" micro-service*/
    

  }

  searchGames(){
    /*TODO
    - Crate new Page
    - Call Get to micro-service "gestor_juegos" to get all games
    - Add a "Click to add game" functionality calling "asignar_juegos" micro-service*/
  }

}








class PlayerObject {

  private _id: string;
  private firstname: string;
  private lastname: string;
  private age: string;
  private dni: string;
  // private followers: [];
  // private following: [];

  constructor(public firstnameInit: string, public lastnameInit:  string, public ageInit: string ) {
    this.firstname = firstnameInit;
    this.lastname = lastnameInit;
    this.age = ageInit;

  }

  // constructor(public firstnameInit: string, public lastnameInit:  string, public ageInit: string, public followers: [], public following:[] ) {
  //   this.firstname = firstnameInit;
  //   this.lastname = lastnameInit;
  //   this.age = ageInit;
  //   this.followers = followers;
  //   this.following = following;
  // }

  getFirstName(): string {
    return this.firstname;
  }
  getLastName(): string {
    return this.lastname;
  }
  setFirstName(first: string ){
    this.firstname = first;
  }
  setLastName(last: string){
    this.lastname = last;
  }

  getAge(): string {
    return this.age;
  }
  setAge(age_new: string){
    this.age = age_new;
  }
}
