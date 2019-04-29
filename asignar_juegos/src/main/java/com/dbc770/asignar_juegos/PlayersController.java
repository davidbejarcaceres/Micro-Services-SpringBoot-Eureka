package com.dbc770.asignar_juegos;

import java.util.ArrayList;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*") //CORS security, Allows coneccting to the API from external paths.
@RestController
@RequestMapping("")
public class PlayersController {

  @Autowired
  private PlayersRepository repositoryPlayers;
  @Autowired
  private GamesRepository repositoryGames;

  @PutMapping(value = "/player/{id}/game/{id_game}")
  public Players asignGameToPlayerByID(@PathVariable("id") ObjectId id, @PathVariable("id_game") ObjectId id_game ) {
    Players player = repositoryPlayers.findBy_id(id);
    if (player.games != null) {
      player.games.add(repositoryGames.findBy_id(id_game));
    } else{
      player.games = new ArrayList<Games>();
      player.games.add(repositoryGames.findBy_id(id_game));
    }
    repositoryPlayers.save(player);

    return player;
  }

  @GetMapping(value="/hi")
  public String sayHi(){
    return "Hi from the asignar-juegos micro-service";
  }
}