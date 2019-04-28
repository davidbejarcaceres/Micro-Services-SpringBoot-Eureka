import { Component } from '@angular/core';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  actual_player= new PlayerObject("David", "Bejar", "24");
  

  constructor(public activatedRoute: ActivatedRoute) {

    // this.actual_player.setFirstName("David");
    // this.actual_player.setLastName("Bejar");
    // this.actual_player.setAge("24");

   }
  // List the games of the player
  myGames(){

    /*TODO
    - Crate new Page
    - Call Get to micro-service "gestor_jugadores" to get all games
      by this player passing the _id of t to Mongo*/
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

  // constructor(private _idInit: string,private firstnameInit: string, private lastnameInit:  string, private ageInit: string, private dniInit: string) {
  //   this._id = _idInit;
  //   this.firstname = firstnameInit;
  //   this.lastname = lastnameInit;
  //   this.age = ageInit;
  //   this.dni = dniInit;
  // }

  constructor(private firstnameInit: string, private lastnameInit:  string, private ageInit: string) {
    this.firstname = firstnameInit;
    this.lastname = lastnameInit;
    this.age = ageInit;
  }

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
