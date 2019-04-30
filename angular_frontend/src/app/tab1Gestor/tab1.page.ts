import { GamesServiceService } from './../games-service.service';
import { Component, Injectable } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
//import { Repo } from './../models/repo';
import { Http } from '@angular/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../models/Game';

const URLGAMES = 'http://localhost:53915/games/';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


@Injectable()
export class Tab1Page {
  games = [];
  urlServicioPlayers:string;

  constructor(private http: Http ,private gamesServiceRepo: GamesServiceService , public navCtrl: NavController) {

    this.gamesServiceRepo.getURLPivote("CLIENT-GESTIONAR-JUEGOS").subscribe(async url => {
      var urlFinal = url._body + "/games";
      this.urlServicioPlayers = urlFinal;
    })
  }
  
  public getRepo(){
    this.gamesServiceRepo.getGames().subscribe(async gamesArray => {
      this.games = <Game[]>gamesArray;
      console.log(this.games);
      
    })    
  }

  // navegaDetalle(repo: Repo){
  //   this.navCtrl.navigateForward(['/datail', { repo: repo }]);
  // }
  ionViewDidLoad() {  }
}
