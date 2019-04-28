import { Game } from './models/Game';
import { Http } from '@angular/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const URLGAMES = 'http://localhost:53915/games/';


@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {

  public constructor(private http: Http) { }



  public getRepos(): Observable<Game[]> { 
    return this.http.get(URLGAMES).pipe(map(res => <Game[]>res.json()));
  }

  // Get ALl GAMES
  getGames(){
    let url = URLGAMES + "";
    return this.http.get(url).pipe(map(res => <Game[]>res.json()));
  }


}
