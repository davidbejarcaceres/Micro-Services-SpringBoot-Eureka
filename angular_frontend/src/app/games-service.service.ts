import { Game } from './models/Game';
import { Http } from '@angular/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const URLGAMES = 'http://localhost:52716/games/';
const URLPLAYERS = 'http://localhost:53178/players/';

const URLGETONE= 'one';


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

  public getPlayers(): Observable<[]> { 
    return this.http.get(URLPLAYERS).pipe(map(res => <[]>res.json()));
  }

  public getFirstPlayer(): Observable <any>{
    return this.http.get(URLPLAYERS+URLGETONE).pipe(map(firstPlayer => firstPlayer.json()));
  }


}
