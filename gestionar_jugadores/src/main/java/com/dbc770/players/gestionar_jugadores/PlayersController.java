package com.dbc770.players.gestionar_jugadores;

import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

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


  @ApiOperation("Creates a new Player")
  @ApiResponses({
    @ApiResponse(code=201, message = "OK" , response = Players.class)}) 
  @PostMapping(value = "")
  public ResponseEntity<Players> createPlayer(@RequestBody Players player) {
    if (player._id == null) {
      player.setId(ObjectId.get());
    }
    //TODO: Add call  to "validar_datos" micro-serice using feign
    boolean validDNI = true;
    validDNI =  validateDNI(validDNI);
    if (validDNI) {

    }

    if (player.games != null) {
      if (player.getGames().size()>0) {
        //TODO: Call "gestionar_juegos" micro-service to save game, use FEIGN for the call
        repositoryGames.saveAll(player.getGames()); // saves games to games collection if playres are added when created
      }
    }

    repositoryPlayers.save(player); // Saves Player referencing the game ID in "games" collection
    return ResponseEntity.status(201).body(player);
  }


  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public void modifyPlayerById(@PathVariable("id") ObjectId id, @Valid @RequestBody Players player) {
    player.setId(id);
    repositoryPlayers.save(player);
  }

  //TODO: Call "asignar_juegos" micro-service to add the game to the player, use FEIGN for the call
  @RequestMapping(value = "/{id}/{id_game}", method = RequestMethod.PUT)
  public void asignGameToPlayerByID(@PathVariable("id") ObjectId id, @PathVariable("id_game") ObjectId id_game ) {
    Players player = repositoryPlayers.findBy_id(id);
    if (player.games != null) {
      player.games.add(repositoryGames.findBy_id(id_game));
    } else{
      player.games = new ArrayList<Games>();
      player.games.add(repositoryGames.findBy_id(id_game));
    }

    repositoryPlayers.save(player);
  }

  @DeleteMapping(value = "/{id}")
  public void deletePlayer(@PathVariable ObjectId id) {
    repositoryPlayers.delete(repositoryPlayers.findBy_id(id));
  }

  //TODO: Move this method to "verifica_datos" micro-service
  public boolean validateDNI(boolean validDNI){
    return true;
  }

}