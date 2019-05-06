package com.dbc770.players.gestionar_jugadores;

import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import com.dbc770.players.gestionar_jugadores.Repositories.*;
import com.dbc770.players.gestionar_jugadores.models.Players;
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

/**
 * @author David Bejar Caceres
 * 2019 dbc770@inlumine.ual.es
 */

@CrossOrigin(origins = "*") //CORS security, Allows coneccting to the API from external paths.
@RestController
@RequestMapping("/players")
public class PlayersController {

  @Autowired
  private PlayersRepository repositoryPlayers;
  @Autowired
  private GamesRepository repositoryGames; // Only for adding games to the DB directly, when someone is adding a player also with games in batch. Does not provide any API, that´s another micro-services
  @Autowired
  ValidateDNIClient validateDNIClient;

  @RequestMapping(value = "", method = RequestMethod.GET)
  public @ResponseBody  List<Players> getAllPlayers() {
    return repositoryPlayers.findAll();
  }

  @ApiOperation(value = "Find Player by Id", response = Players.class )
  @ApiResponses({
    @ApiResponse(code=200, message = "OK" , response = Players.class)
  })
  @GetMapping(value = "/{id}", produces = "application/json")
  public ResponseEntity<?> getPlayerById(@PathVariable("id") ObjectId id) {
    Players player = repositoryPlayers.findBy_id(id);
    if (player != null) {
      return ResponseEntity.ok().body(player);
    } else {
      return ResponseEntity.status(404).body(null);
    }
  }

  @GetMapping(value = "/{id}/following", produces = "application/json")
  public ResponseEntity<?> getFollowingById(@PathVariable("id") ObjectId id) {
    Players player = repositoryPlayers.findBy_id(id);
    if (player == null) {
      return ResponseEntity.status(404).body(null);
    }

    List<Players> following = new ArrayList<Players>();
    if (player.getFollowing() != null) {
      for (ObjectId followingId : player.getFollowing()) {
        following.add(repositoryPlayers.findBy_id(followingId));
      }
      return ResponseEntity.ok().body(following);
    }
    return ResponseEntity.ok().body(following);
  }

  @GetMapping(value = "/{id}/followers", produces = "application/json")
  public ResponseEntity<?> getFollowersById(@PathVariable("id") ObjectId id) {
    Players player = repositoryPlayers.findBy_id(id);
    if (player == null) {
      return ResponseEntity.status(404).body(null);
    }
    List<Players> followers = new ArrayList<Players>();
    if (player.getFollowers()!= null) {
      for (ObjectId followingId : player.getFollowers()) {
        followers.add(repositoryPlayers.findBy_id(followingId));
      }
      return ResponseEntity.ok().body(followers);
    }
    return ResponseEntity.ok().body(followers);
  }

  @ApiOperation(value = "Find Player by Name", response = Players.class )
  @GetMapping(value = "/name/{name}", produces = "application/json")
  public ResponseEntity<List<Players>> getPlayerByName(@PathVariable("name") String name) {
    List<Players> player = repositoryPlayers.findByName(name);
    if (player != null) {
      return ResponseEntity.ok().body(player);
    } else {
      return ResponseEntity.status(404).body(null);
    }
  }

  @ApiOperation(value = "Find Player by Lastname", response = Players.class )
  @GetMapping(value = "/lastname/{lastname}", produces = "application/json")
  public ResponseEntity<List<Players>>  getPlayerByLastname(@PathVariable("lastname") String lastname) {
    List<Players> player = repositoryPlayers.findByLastname(lastname);
    if (player != null) {
      return ResponseEntity.ok().body(player);
    } else {
      return ResponseEntity.status(404).body(null);
    }
  }

  @ApiOperation(value = "Find Player by dni", response = Players.class )
  @GetMapping(value = "/dni/{dni}", produces = "application/json")
  public ResponseEntity<?>  getPlayerByDni(@PathVariable("dni") String dni) {
    List<Players> player = repositoryPlayers.findByDni(dni);
    if (player != null) {
      return ResponseEntity.ok().body(player);
    } else {
      return ResponseEntity.status(404).body(null);
    }
  }

  // This is only for the front end, in the player tab it takes the first player of the list to do all of the operations
  @ApiOperation(value = "Find First player from the DB", response = Players.class )
  @GetMapping(value = "/one")
  public  ResponseEntity<?> getFirstPlayer() {
     List<Players> repo = repositoryPlayers.findAll();
    if ( repo != null && repo.size() > 0 && !repo.isEmpty()) {
      return  ResponseEntity.status(200).body(repo.get(1));
    }
    return  ResponseEntity.status(204).body(null);
  }



  @ApiOperation(value = "Creates a new Player, not mandatory add games, the API can but the front-end wil be doing it for separate")
  @ApiResponses({
    @ApiResponse(code=201, message = "OK" , response = Players.class)}) 
  @PostMapping(value = "", produces = "application/json")
  public ResponseEntity<?> createPlayer(@Valid @RequestBody Players player) {
    if (player._id == null) {
      player.setId(ObjectId.get());
    }
    //TODO: ASK PROFESSOR Disabled strict validation, just checks the lenght == 10 OR 9, 
    if (validateDNIClient.validateDNI(player.getDni())) {
      if (player.games != null) {
        if (player.getGames().size()>0) {
          //TODO: ASK PROFESSOR "gestionar_juegos" to save new games, temporary for development pourposes
          repositoryGames.saveAll(player.getGames()); // saves games to games collection if playres are added when created,
        }
      }
      repositoryPlayers.save(player); // Saves Player referencing the game ID in "games" collection
      return ResponseEntity.status(201).body(player);
    } else{
      return  ResponseEntity.status(400).body("DNI is not valid, please input 9 or 10 digits"); //Not Created
    }
  }


  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public ResponseEntity<?> modifyPlayerById(@PathVariable("id") ObjectId id, @Valid @RequestBody Players player) {
    player.setId(id);
    Players originalPlayer = repositoryPlayers.findBy_id(id);
    if (originalPlayer == null) {
      return ResponseEntity.status(404).body(null); // Checks if the player exists
    }
    player.setGames(originalPlayer.games);
    player.setFollowers(originalPlayer.getFollowers());
    player.setFollowing(originalPlayer.getFollowing());

    if (player.name != null) {
      String newName = player.name;
      if (!newName.equals(originalPlayer.name) && newName.length() > 2) {
        player.setName(newName);
      }
    }

    if (player.lastname != null) {
      String newLastname = player.lastname;
      if (!newLastname.equals(originalPlayer.lastname) && newLastname.length() > 2) {
        player.setName(newLastname);
      }
    }

    if (player.age != null) {
      String newAge = player.age;
      if (!newAge.equals(originalPlayer.age)) {
        player.setAge(newAge);
      }
    }

    if (player.dni != null) {
      String newDni = player.getDni();
      if (!newDni.equals(originalPlayer.getDni()) && validateDNIClient.validateDNI(player.getDni())  ) {
        player.setDni(newDni);
        repositoryPlayers.save(player);
        return ResponseEntity.ok().body(null);
      } else {
        //If not valid DNI, the DNI still the same as original but saves the rest of the properties
        player.setDni(originalPlayer.getDni());
        repositoryPlayers.save(player);
        return ResponseEntity.ok().body("DNI was not valid, the rest of the fields were updated properly");
      }
    }
    repositoryPlayers.save(player);
    return ResponseEntity.ok().body(null);
  }

  @DeleteMapping(value = "/{id}")
  public void deletePlayer(@PathVariable ObjectId id) {
    repositoryPlayers.delete(repositoryPlayers.findBy_id(id));
  }
}