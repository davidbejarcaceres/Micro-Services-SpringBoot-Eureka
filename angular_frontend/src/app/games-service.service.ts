import { ServiceInfo } from './models/ServiceInfo';
import { Game } from './models/Game';
import { Http, Response, Headers } from '@angular/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const LOOKUP_SERVICE = 'http://localhost:5930/lookup/';
const LOOKUP_SERVICE_URL = 'http://localhost:5930/lookup/url/';
const CLIENT_ASIGNAR_JUEGOS = "CLIENT-ASIGNAR-JUEGOS";
const CLIENT_GESTIONAR_JUEGOS = "CLIENT-GESTIONAR-JUEGOS";
const CLIENT_ASIGNAR_SEGUIDORES = "CLIENT-ASIGNAR-SEGUIDORES";
const CLIENT_GESTIONAR_JUGADORES = "CLIENT-GESTIONAR-JUGADORES";
const CLIENT_VERIFICAR_DATOS= "CLIENT-VERIFICAR-DATOS";
const MICRO_SERVICIOS_NAMES = <string[]>[CLIENT_ASIGNAR_JUEGOS, CLIENT_GESTIONAR_JUEGOS, CLIENT_ASIGNAR_SEGUIDORES, CLIENT_GESTIONAR_JUGADORES];


@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {
  urlGamesBaseURL: string;
  urlPlayersBaseURL: string;
  urlAssignGamesBaseURL: string;
  urlAssignFollowersBaseURL: string;

  


  public constructor(private http: Http) {
    this.getURLPivote(CLIENT_GESTIONAR_JUEGOS).subscribe(async url => {
      var urlFinal = url._body + "/games";
      this.urlGamesBaseURL = urlFinal;
      console.log("Gestor-juegos:  " +this.urlGamesBaseURL);
    });

    this.getURLPivote(CLIENT_GESTIONAR_JUGADORES).subscribe(async url => {
      var urlFinal = url._body + "/players";
      this.urlPlayersBaseURL = urlFinal;
      console.log("Gestor-jugadores:  " +this.urlPlayersBaseURL);
    });

    this.getURLPivote(CLIENT_ASIGNAR_JUEGOS).subscribe(async url => {
      var urlFinal = url._body + "";
      this.urlAssignGamesBaseURL = urlFinal;
      console.log("Asignar-juegos:  " +this.urlAssignGamesBaseURL);
    });

    this.getURLPivote(CLIENT_ASIGNAR_SEGUIDORES).subscribe(async url => {
      var urlFinal = url._body + "";
      this.urlAssignFollowersBaseURL = urlFinal;
      console.log("Asignar-Seguidores:  " +this.urlAssignFollowersBaseURL);
    });

    //TODO: Delete later if don´t needed, this fetches all the info from a servie not just the URI
    // this.getServiceInfo().subscribe(async (res: Response) =>{
    //   console.log("HTTP Code: " + res.status);
    //   var info = res.json();      
    //   console.log(info);
    //   console.log("Host: " + info[0].host);
    //   console.log("Port: " + info[0].port);
    //   console.log("Uri: " + info[0].uri);
      
    // });
   }

  URLServicio: string;

  getGames(){
    return this.http.get(this.urlGamesBaseURL).pipe(map((res: Response) => {
      console.log("JUEGOS OBTENIDOS");
      console.log("HTTP Code: "+ res.status);
      //TODO: Add toast to show res.status code
      return <Game[]>res.json();
    } 
    
    ));
  }

  public getPlayers(): Observable<[]> { 
    return this.http.get(this.urlPlayersBaseURL).pipe(map((res: Response) => {
      console.log("HTTP Code: " + res.status);
      //TODO: Add toast to show res.status code
      return <[]>res.json();
    }));
  }

  public getFirstPlayer(): Observable <any>{
    var urlgetOne = this.urlPlayersBaseURL + "/one";
    return this.http.get(urlgetOne).pipe(map((res: Response) => {
      console.log("HTTP Code: " + res.status);
      //TODO: Add toast to show res.status code
      <Game[]>res.json();
    }));
  }

  assignGametoPlayer(playerId: string, gameId: string){
    //TODO: Call API to assign game to player
    var assignGameToPlayer = this.urlAssignGamesBaseURL + "/player/" + playerId + "/game/" + gameId;
    console.log("Game Assigned to player");
    return this.http.put(assignGameToPlayer, null).pipe(map((res: Response) => {
      console.log("HTTP Code: " + res.status);
      //TODO: Add toast to show res.status code
      return <[]>res.json();
    }));
  }

  public getServiceURL(serviceName: string): any{
    return this.http.get(LOOKUP_SERVICE_URL + serviceName).pipe(map(
      ServiceUrl => <string>ServiceUrl.json()));
  }

  // TODO: delete later, method to get URL of the service using the pivot
  getURL(serviceName:string): any { 
    this.getURLPivote("CLIENT-GESTIONAR-JUEGOS").subscribe(async url => {
      console.log("Intentando obtener el valor del cuerpo");
      console.log(url._body);
      return url._body;
    });
  }

  getURLPivote(serviceName:string): any {     
    return this.http.get(LOOKUP_SERVICE_URL + serviceName).pipe();
  }

  public getServiceInfo(): Observable<any> {
    return this.http.get(LOOKUP_SERVICE+ "CLIENT-GESTIONAR-JUGADORES").pipe(map(res => {
      return res;
    }));
  }

}
