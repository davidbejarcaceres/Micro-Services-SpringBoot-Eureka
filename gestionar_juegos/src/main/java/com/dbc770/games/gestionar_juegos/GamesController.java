package com.dbc770.games.gestionar_juegos;

import java.util.List;
import javax.validation.Valid;
import com.dbc770.games.gestionar_juegos.Models.Games;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
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

@RestController
@CrossOrigin(origins = "*") //CORS security, Allows coneccting to the API from external paths.
@RequestMapping("/games")
public class GamesController {

  @Autowired
  private GamesRepository repository;

  @RequestMapping(value = "", method = RequestMethod.GET)
  public @ResponseBody  List<Games> getAllGames() {
    return repository.findAll();
  }

  @RequestMapping(value = "/", method = RequestMethod.GET)
  public @ResponseBody  List<Games> getAllBarra() {
    return repository.findAll();
  }

  @ApiOperation("Find games by Id")
  @ApiResponses({
    @ApiResponse(code=200, message = "OK" , response = Games.class)
  })
  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public Games getGameById(@PathVariable("id") ObjectId id) {
    return repository.findBy_id(id);
  }

  @RequestMapping(value = "/name/{name}", method = RequestMethod.GET)
  public List<Games> getGameByName(@PathVariable("name") String name) {
    return repository.findByName(name);
  }


  @ApiOperation("Creates a new Game")
  @ApiResponses({
    @ApiResponse(code=201, message = "Created" , response = Games.class)
  })
  @RequestMapping(value = "", method = RequestMethod.POST)
  public ResponseEntity<?> createPet(@Valid @RequestBody Games game) {
    game.setId(ObjectId.get());
    repository.save(game);
    return ResponseEntity.status(201).body(game);
  }


  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public ResponseEntity<?> modifyGameById(@PathVariable("id") ObjectId id, @Valid @RequestBody Games juego) {
    if (id != null) {
        juego.setId(id);
    }
    // Searches for the game if exist in DB
    if(repository.existsById(id.toHexString())){
      repository.save(juego);
      return  ResponseEntity.ok().body(juego);
    } else{
      return  ResponseEntity.status(204).body("Element not found, nothing was updated");
    }
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public ResponseEntity<?> deleteGame(@PathVariable ObjectId id) {
    if(repository.existsById(id.toHexString())){
      repository.delete(repository.findBy_id(id));
      return  ResponseEntity.ok().body(null);
    } else {
      return  ResponseEntity.status(204).body(null);
    }
  }
}