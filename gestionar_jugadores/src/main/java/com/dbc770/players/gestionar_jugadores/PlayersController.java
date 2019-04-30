package com.dbc770.players.gestionar_jugadores;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@CrossOrigin(origins = "*") //CORS security, Allows coneccting to the API from external paths.
@RestController
@RequestMapping("/players")
public class PlayersController {

  @Autowired
  private PlayersRepository repositoryPlayers;
  @Autowired
  private GamesRepository repositoryGames;
  @Autowired
  AssignGameClient assignGameClient;
  @Autowired
  ValidateDNIClient validateDNIClient;

  @RequestMapping(value = "", method = RequestMethod.GET)
  public @ResponseBody  List<Players> getAllPlayers() {
    return repositoryPlayers.findAll();
  }

  @ApiOperation("Find Player by Id")
  @ApiResponses({
    @ApiResponse(code=200, message = "OK" , response = Players.class)
  })
  @GetMapping(value = "/{id}")
  public Players getPlayerById(@PathVariable("id") ObjectId id) {
    Players player = repositoryPlayers.findBy_id(id);
    return repositoryPlayers.findBy_id(id);
  }

  @GetMapping(value = "/name/{name}")
  public List<Players> getPlayerByName(@PathVariable("name") String name) {
    return repositoryPlayers.findByName(name);
  }


  @ApiOperation("Creates a new Player, not mandatory add games, the API can but the front-end wil be doing it after")
  @ApiResponses({
    @ApiResponse(code=201, message = "OK" , response = Players.class)}) 
  @PostMapping(value = "")
  public ResponseEntity<?> createPlayer(@RequestBody Players player) {
    if (player._id == null) {
      player.setId(ObjectId.get());
    }
    //TODO: ASK PROFESSOR Disabled strict validation, just checks the lenght == 10 OR 9, 
    if (validateDNIClient.validateDNI(player.getDni())) {
      if (player.games != null) {
        if (player.getGames().size()>0) {
          //TODO: ASK PROFESSOR "gestionar_juegos" to save new games, temporary for development pourposes
          repositoryGames.saveAll(player.getGames()); // saves games to games collection if playres are added when created
        }
      }
      repositoryPlayers.save(player); // Saves Player referencing the game ID in "games" collection
      return ResponseEntity.status(201).body(player);
    } else{
      return  ResponseEntity.status(400).body(player); //Not Created
    }
  }


  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public void modifyPlayerById(@PathVariable("id") ObjectId id, @Valid @RequestBody Players player) {
    player.setId(id);
    repositoryPlayers.save(player);
  }

  @DeleteMapping(value = "/{id}")
  public void deletePlayer(@PathVariable ObjectId id) {
    repositoryPlayers.delete(repositoryPlayers.findBy_id(id));
  }



  //TODO: Some test API paths , delete later
  @GetMapping(value="/helloAssignarJuegos")
  public String callAsignarJuegos() {
      String nombre = "David";
      String saludo = assignGameClient.sayHi(nombre);
      if (saludo!= null) {
        return saludo;
      }
      return "error al obtener comunicación";
  }

  @GetMapping(value="/hellovalidatemethod")
  public String callValidatorHelloMethod() {
      String nombre = "David";
      String saludo = validateDNIClient.sayHiMethod(nombre);
      if (saludo!= null) {
        return saludo;
      }
      return "error al obtener comunicación";
  }
}