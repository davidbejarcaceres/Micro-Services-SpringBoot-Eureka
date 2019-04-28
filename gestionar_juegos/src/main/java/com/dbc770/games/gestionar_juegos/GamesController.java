package com.dbc770.games.gestionar_juegos;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
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


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/games")
public class GamesController {

  @Autowired
  private GamesRepository repository;

  //@CrossOrigin(origins = "*")
  @RequestMapping(value = "", method = RequestMethod.GET)
  public @ResponseBody  List<Games> getAllGames() {
    return repository.findAll();
  }

  //@CrossOrigin(origins = "*")
  @RequestMapping(value = "/", method = RequestMethod.GET)
  public @ResponseBody  List<Games> getAllBarra() {
    return repository.findAll();
  }

  //@CrossOrigin(origins = "*")
  @RequestMapping(value = "/todos", method = RequestMethod.GET)
  public @ResponseBody  List<Games> getAllTodo() {
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
    @ApiResponse(code=200, message = "OK" , response = Games.class)
  })
  @RequestMapping(value = "", method = RequestMethod.POST)
  public Games createPet(@Valid @RequestBody Games game) {
    game.setId(ObjectId.get());
    repository.save(game);
    return game;
  }


  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public void modifyGameById(@PathVariable("id") ObjectId id, @Valid @RequestBody Games juego) {
    if (id != null) {
        juego.setId(id);
    }
    repository.save(juego);
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteGame(@PathVariable ObjectId id) {
    repository.delete(repository.findBy_id(id));
  }

}