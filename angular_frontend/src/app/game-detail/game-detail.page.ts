import { Game } from './../models/Game';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesServiceService } from '../games-service.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
})
export class GameDetailPage implements OnInit {

  game: Game;

  constructor(public activatedRoute: ActivatedRoute, private apiService: GamesServiceService) {
    this.activatedRoute.params.subscribe(param => {
      this.game = <Game>param;        
    });
   }

  deleteGame(){
    this.apiService.deleteGame(this.game._id);    
  }

  updateGame(form){

    var newGame = new GameClass(this.game._id, this.game.name, this.game.description, this.game.portada) 
    console.log("Nuevo Juego como clase editable");
    console.log(newGame);
    
    console.log("Datos del formulario: ");
    console.log(form.value);
  
    console.log("COMPARANDO VALORES NUEVOS");
    
    if (form.value.name != null) {
      var newName = <string>form.value.name;
      if (newName !== this.game.name && newName.length > 2) {
        console.log("Cambia nombre");
        newGame.setName(newName);
        console.log(newGame.getName());
      }
    }

    if (form.value.description != null) {
      var newDescription = <string>form.value.description;
      if (newDescription !== this.game.description && newDescription.length > 2) {
        console.log("Cambia Description");
        //this.game.description = newDescription;
        newGame.setDescription(newDescription);
        console.log(newGame.getDescription());
      }
    }

    if (form.value.portada != null) {
      var newPortada = <string>form.value.portada;
      if (newPortada !== this.game.description && newPortada.length > 2) {
        console.log("Cambia Portada");
        newGame.setPortada(newPortada)
        console.log(newGame.getPortada());
      }
    }
    //alert(newGame);
    form.reset();
    this.apiService.updateGame(newGame);
  }

  ngOnInit() {
  }

}


class GameClass {

  public _id: string;
  public name: string;
  public description: string;
  public portada: string;


  constructor(private id: string, private Name: string, private Description:  string, private Portada: string) {
    this._id = id;
    this.name = Name;
    this.description = Description;
    this.portada = Portada;
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
  public getDescription(): string {
    return this.description;
  }
  public setName(first: string ){
    this.name = first;
  }
  public setDescription(descrip: string){
    this.description = descrip;
  }

  public getPortada(): string {
    return this.portada;
  }
  public setPortada(image: string){
    this.portada = image;
  }

  public toString(): string {
    return "{" +
        " id:'" + this.getId() + "'" +
        ", name:'" + this.getName() + "'" +
        ", description:'" + this.getDescription() + "'" +
        ", portada:'" + this.getPortada() + "'" +
        "}";
  }
}
