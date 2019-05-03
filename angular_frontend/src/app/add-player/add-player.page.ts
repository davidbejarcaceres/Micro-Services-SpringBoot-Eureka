import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../games-service.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.page.html',
  styleUrls: ['./add-player.page.scss'],
})
export class AddPlayerPage implements OnInit {

player: PlayerObject;

  constructor(private apiService: GamesServiceService) { }


  addPlayer(form){
    this.player = form.value;
    console.log(this.player);
    //alert(this.player.toString());
    form.reset();
    this.apiService.savePlayerToDB(this.player);
   }

  ngOnInit() {
  }

}



class PlayerObject {

  private name: string;
  private lastname: string;
  private age: string;
  private dni: string;


  constructor(private firstnameInit: string, private lastnameInit:  string, private ageInit: string, private DNI: string ) {
    this.name = firstnameInit;
    this.lastname = lastnameInit;
    this.age = ageInit;
    this.dni = DNI;
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

  public toString(): string {
    return "{" +
        " id:'" + this.getName() + "'" +
        ", name:'" + this.getLastName() + "'" +
        ", description:'" + this.getAge() + "'" +
        ", portada:'" + this.getDNI() + "'" +
        "}";
  }


}
