import { ServiceInfo } from './models/ServiceInfo';
import { Game } from './models/Game';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry, timeInterval, timeout, delay, take, retryWhen } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { lookup } from 'dns';

/**
 * @author David Bejar Caceres
 * 2019 dbc770@inlumine.ual.es
 */

const LOOKUP_SERVICE = 'http://localhost:5930/lookup/';
const LOOKUP_SERVICE_URL = 'http://localhost:5930/lookup/url/';
const CLIENT_ASIGNAR_JUEGOS = "CLIENT-ASIGNAR-JUEGOS";
const CLIENT_GESTIONAR_JUEGOS = "CLIENT-GESTIONAR-JUEGOS";
const CLIENT_ASIGNAR_SEGUIDORES = "CLIENT-ASIGNAR-SEGUIDORES";
const CLIENT_GESTIONAR_JUGADORES = "CLIENT-GESTIONAR-JUGADORES";
const CLIENT_VERIFICAR_DATOS= "CLIENT-VERIFICAR-DATOS";
const CLIENT_CORBA_NEWS= "CLIENT-CORBA-NEWS";
const MICRO_SERVICIOS_NAMES = <string[]>[CLIENT_ASIGNAR_JUEGOS, CLIENT_GESTIONAR_JUEGOS, CLIENT_ASIGNAR_SEGUIDORES, CLIENT_GESTIONAR_JUGADORES];


@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {
  urlGamesBaseURL: string;
  urlPlayersBaseURL: string;
  urlAssignGamesBaseURL: string;
  urlAssignFollowersBaseURL: string;
  urlCorbaNews: string;

  


  public constructor(private http: Http, private toastController: ToastController) {
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

    this.getURLPivote(CLIENT_CORBA_NEWS).subscribe(async url => {
      var urlFinal = url._body + "/corba/news";
      this.urlCorbaNews = urlFinal;
      console.log("Corba-News:  " +this.urlCorbaNews);
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
      var action = "Games arrived";
      this.presentToast(res.status.toString(), action );
      return <Game[]>res.json();
      }, error => {
                    this.presentToast("Error: ", "Check Game Service  running" );
                    console.log(error.text());
                    }
    
    ));
  }

  public getNews(): Observable<[]> { 
    return this.http.get(this.urlCorbaNews).pipe(map((res: Response) => {
      console.log("HTTP Code: " + res.status);
      var action = "Got News From Server";
      this.presentToast(res.status.toString(), action);
      return <[]>res.json();
    },  error => {
                this.presentToast("Error: ", "Check Corba Server running" );
                console.log(error.text());
      }
    
    ));
  }


  public getPlayers(): Observable<[]> { 
    return this.http.get(this.urlPlayersBaseURL).pipe(map((res: Response) => {
      console.log("HTTP Code: " + res.status);
      //TODO: Add toast to show res.status code
      var action = "Got Players";
      return <[]>res.json();
    }));
  }

  public getPlayerById(_id: string): Observable<any> {
    var getPlayerById = this.urlPlayersBaseURL + "/" + _id;
    return this.http.get(getPlayerById).pipe(map((res: Response) => {
      console.log("HTTP Code: " + res.status);
      //TODO: Add toast to show res.status code
      return res.json();
    }));
  }

  public getFollowersById(_id: string): Observable<any> {
    var getPlayerById = this.urlPlayersBaseURL + "/" + _id + "/followers" ;
    return this.http.get(getPlayerById).pipe(map((res: Response) => {
      console.log("HTTP Code: " + res.status);
      //TODO: Add toast to show res.status code
      return res.json();
    }));
  }

  public getFollowingById(_id: string): Observable<any> {
    var getPlayerById = this.urlPlayersBaseURL + "/" + _id + "/following" ;
    return this.http.get(getPlayerById).pipe(map((res: Response) => {
      console.log("HTTP Code: " + res.status);
      //TODO: Add toast to show res.status code
      return res.json();
    }));
  }

  public getFirstPlayer(): Observable <any>{
    var urlgetOne = this.urlPlayersBaseURL + "/one";
    return this.http.get(urlgetOne).pipe(map((res: Response) => {
      console.log("HTTP Code: " + res.status);
      //TODO: Add toast to show res.status code
      console.log(res.json());
      return res.json();
    }));
  }


  savePlayerToDB(player: any){
    console.log(this.urlPlayersBaseURL);
    let body = 1; 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.urlPlayersBaseURL, player, options)
    .subscribe( 
          response => {
                        console.log("Player Saved " + response.status);  
                        var action = "Player saved";
                        this.presentToast(response.status.toString(), action );                         
                        console.log(response.json());
                      },
         error => {
                        alert(error.text());
                        console.log(error.text());
        });
  }

  updatePlayer(player: any){
    var updateGameurl = this.urlPlayersBaseURL + "/" + player._id;
    let body = 1; 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.put(updateGameurl, player, options)
    .subscribe( 
          response => {
                        console.log("Player Updated " + response.status);
                        var action = "Player updated";
                        this.presentToast(response.status.toString(), action );
                      },
         error => {
                        alert(error.text());
                        console.log(error.text());
        });
  }

  assignGametoPlayer(playerId: string, gameId: string){
    var assignGameToPlayer = this.urlAssignGamesBaseURL + "/player/" + playerId + "/game/" + gameId;
    console.log(assignGameToPlayer);

    let body = 1; 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.put(assignGameToPlayer, body, options)
     .subscribe( 
           response => {
                         console.log("Game Assigned " + response.status);
                         var action = "Game assigned";
                         this.presentToast(response.status.toString(), action );                          
                         console.log(response.json());
                       },
          error => {
                         alert(error.text());
                         console.log(error.text());
         });
  }

  followPlayer(playerId: string, toFollowId: string){
    var followPlayer = this.urlAssignFollowersBaseURL + "/player/" + playerId + "/follower/" + toFollowId;
    console.log(followPlayer);

    let body = 1; 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.put(followPlayer, body, options)
     .subscribe( 
           response => {
                          var action = "Following player ";
                          console.log(action + response.status);
                         this.presentToast(response.status.toString(), action);                          
                       },
          error => {
                         alert(error.text());
                         console.log(error.text());
         });
  }

  unfollowPlayer(playerId: string, toUnfollow: string){
    var unfollowPlayer = this.urlAssignFollowersBaseURL + "/player/" + playerId + "/follower/" + toUnfollow;
    console.log(unfollowPlayer);

    let body = 1; 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.delete(unfollowPlayer)
     .subscribe( 
           response => {
                          var action = "removed from following ";
                          console.log(action + response.status);
                          this.presentToast(response.status.toString(), action);                          
                       },
          error => {
                         alert(error.text());
                         console.log(error.text());
         });
  }


  saveGameToDB(game: Game){
    console.log(this.urlGamesBaseURL);
    let body = 1; 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.urlGamesBaseURL, game, options)
    .subscribe( 
          response => {
                        console.log("Game Saved " + response.status);  
                        var action = "Game saved";
                        this.presentToast(response.status.toString(), action );                         
                        console.log(response.json());
                      },
         error => {
                        alert(error.text());
                        console.log(error.text());
        });
  }

  updateGame(game: Game){
    var updateGameurl = this.urlGamesBaseURL + "/" + game._id;
    let body = 1; 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.put(updateGameurl, game, options)
    .subscribe( 
          response => {
                        console.log("Game Updated " + response.status);
                        var action = "Game updated";
                        this.presentToast(response.status.toString(), action );                           
                        console.log(response.json());
                      },
         error => {
                        alert(error.text());
                        console.log(error.text());
        });
  }

  deleteGame(gameId: string){
    var deleteGameurl = this.urlGamesBaseURL + "/" + gameId;
    console.log(deleteGameurl);
    let body = 1; 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.delete(deleteGameurl, gameId)
    .subscribe( 
          response => {
                        console.log("Game Deleted " + response.status);
                        var action = "Game deleted";
                        this.presentToast(response.status.toString(), action );                                                   
                      },
         error => {
                        alert(error.text());
                        console.log(error.text());
        });
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


  async presentToast(code: string, action: string) {
    const toast = await this.toastController.create({
      message: (code + "  -  " + action),
      duration: 1000,
    });
    toast.present();
  }

  getURLPivote(serviceName:string): any {     
    return this.http.get(LOOKUP_SERVICE_URL + serviceName)
    .pipe(
      retryWhen(errors => errors.pipe(delay(10000), take(10)))
    );
  }


  getServiceInfoFull(){
    console.log("LOOKUP_SERVICE: " + LOOKUP_SERVICE);
    let body = 1; 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.get(this.urlPlayersBaseURL, options)
    .subscribe( 
          response => {
                        console.log("Service info  " + response.status);  
                        var action = "Service info ";
                        this.presentToast(response.status.toString(), action );                         
                        console.log(response.json());
                      },
         error => {
                        alert(error.text());
                        console.log(error.text());
        });
  }

}
