import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../games-service.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.page.html',
  styleUrls: ['./player-detail.page.scss'],
})
export class PlayerDetailPage implements OnInit {

  player: PlayerClass;

  constructor(private apiService: GamesServiceService,private activatedRoute : ActivatedRoute ) {
    this.activatedRoute.params.subscribe(param => {
      this.player = <any>param;
      console.log(this.player);
      
      this.apiService.getPlayerById(this.player._id).subscribe(async playerId => {
        this.player = <PlayerClass>playerId;
      })       
    });
   }

   updatePlayer(form){
    //TODO: Delete a lo tof log for console
    var newPlayer = new PlayerClass(this.player._id, this.player.name, this.player.lastname, this.player.age, this.player.dni, this.player.games, this.player.followers, this.player.following) 
    console.log(form.value);
    
    if (form.value.name != null) {
      var newName = <string>form.value.name;
      if (newName !== this.player.name && newName.length > 2) {
        console.log("Changes Name");
        newPlayer.setName(newName);
        console.log(newPlayer.getName());
      }
    }

    if (form.value.lastname != null) {
      var newLastname = <string>form.value.lastname;
      if (newLastname !== this.player.lastname && newLastname.length > 2) {
        console.log("Changes Lastname");
        newPlayer.setLastName(newLastname);
        console.log(newPlayer.getLastName());
      }
    }

    if (form.value.age != null || form.value.age) {
      var newAge = <string>form.value.age;
      console.log("Comparing: " + newAge + " with: " + this.player.age);
      if (newAge !== this.player.age && newAge.length > 2) {
        console.log("Changes Age");
        newPlayer.setAge(newAge)
        console.log(newPlayer.getAge());
      }
    }

    if (form.value.dni != null) {
      var newDni = <string>form.value.dni;
      if (newDni !== this.player.dni && newDni.length > 7) {
        console.log("Changes DNI");
        newPlayer.setDNI(newDni)
        console.log(newPlayer.getDNI());
      }
    }
    form.reset();
    this.apiService.updatePlayer(newPlayer);
  }

  ngOnInit() {
  }
}

class PlayerClass {

  public _id: string;
  public name: string;
  public lastname: string;
  public age: string;
  public dni: string;
  public games: [];
  public followers: [];
  public following: [];

  constructor(private id: string, private firstnameInit: string, private lastnameInit:  string, private ageInit: string, private DNI: string, private Games: [] , private Followers: [], private Following: [] ) {
    this._id = id;
    this.name = firstnameInit;
    this.lastname = lastnameInit;
    this.age = ageInit;
    this.games = Games;
    this.followers = Followers;
    this.Following = Following;
    this.dni = DNI;
  }

  public getId(): string{
    return this._id
  }

  public setId(id: string){
    this._id = id;
  }

  public getName(): string {
    return this.name;
  }
  public getLastName(): string {
    return this.lastname;
  }
  public setName(first: string ){
    this.name = first;
  }
  public setLastName(last: string){
    this.lastname = last;
  }

  public getAge(): string {
    return this.age;
  }
  public setAge(age_new: string){
    this.age = age_new;
  }

  public getDNI(): string {
    return this.dni;
  }
  public setDNI(DNI: string){
    this.dni = DNI;
  }

  public getGames(): []{
    return this.games;
  }

  public setGames(games: []){
    this.games = games;
  }


  public getFollowers(): []{
    return this.followers;
  }

  public setFollowers(Followers: []){
    this.followers = Followers;
  }

  public getFollowing(): []{
    return this.following;
  }

  public setFollowing(Following: []){
    this.followers = Following;
  }

  public toString(): string {
    return "{" +
        " _id:'" + this.getId() + "'" +
        ", name:'" + this.getName() + "'" +
        ", lastname:'" + this.getLastName() + "'" +
        ", age:'" + this.getAge() + "'" +
        ", dni:'" + this.getDNI() + "'" +
        ", games:'" + this.getGames() + "'" +
        ", followers:'" + this.getFollowers() + "'" +
        ", following:'" + this.getFollowing() + "'" +
        "}";
}
}
