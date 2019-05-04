import { Component } from '@angular/core';
import { GamesServiceService } from '../games-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  news = [];

  constructor(private gamesServiceRepo: GamesServiceService ) {
    // this.gamesServiceRepo.getURLPivote("CLIENT-GESTIONAR-JUEGOS").subscribe(async url => {
    //   var urlFinal = url._body + "/games";
    //   this.urlServicioPlayers = urlFinal;
    // })
    this.getNews();
   }

   public getNews(){
    this.gamesServiceRepo.getNews().subscribe(async news => {      
      this.news = <[]>news;
      console.log(this.news);
    })    
  }

}
