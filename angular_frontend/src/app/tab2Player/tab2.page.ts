import { Component } from '@angular/core';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { ActivatedRoute } from '@angular/router';
import { GamesServiceService } from '../games-service.service';
import { Game } from '../models/Game';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http'; 



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
  following: [];
  followers: [];
  playerID: string;
  

  constructor(public activatedRoute: ActivatedRoute, private apiService: GamesServiceService, private router: Router) {
    console.log("CARGA TAB 2");  
    this.apiService.getFirstPlayer().subscribe(async firstPlayer => {
      
      //TODO: Deletes later
      // var playerTest = new PlayerObject(
      // firstPlayer.json()._id
      // ,firstPlayer.json().name
      // ,firstPlayer.json().lastname
      // ,firstPlayer.json().age
      // ,firstPlayer.json().dni
      // ,firstPlayer.json().followers
      // ,firstPlayer.json().following
      // );
      this.player = firstPlayer.json();
      this.playerID = firstPlayer.json()._id;
      this.player = firstPlayer.json();
      this.name = firstPlayer.json().name;
      this.lastname = firstPlayer.json().lastname;
      this.age = firstPlayer.json().age;
      this.games = firstPlayer.json().games;
      this.following = firstPlayer.json().following;
      this.followers = firstPlayer.json().followers;
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
  private name: string;
  private lastname: string;
  private age: string;
  private dni: string;
  private followers: [];
  private following: [];

  constructor(private id: string, private firstnameInit: string, private lastnameInit:  string, private ageInit: string, private DNI: string, private Followers: [], private Following: [] ) {
    this._id = id;
    this.name = firstnameInit;
    this.lastname = lastnameInit;
    this.age = ageInit;
    this.followers = Followers;
    this.Following = Following;
    this.dni = DNI;
  }

  getId(): string{
    return this._id
  }

  setId(id: string){
    this._id = id;
  }

  getName(): string {
    return this.name;
  }
  getLastName(): string {
    return this.lastname;
  }
  setName(first: string ){
    this.name = first;
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

  getDNI(): string {
    return this.dni;
  }
  setDNI(DNI: string){
    this.dni = DNI;
  }

  getFollowers(): []{
    return this.followers;
  }

  setFollowers(Followers: []){
    this.followers = Followers;
  }

  getFollowing(): []{
    return this.following;
  }

  setFollowing(Following: []){
    this.followers = Following;
  }
}
