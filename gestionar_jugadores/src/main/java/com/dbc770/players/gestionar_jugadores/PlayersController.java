package com.dbc770.players.gestionar_jugadores;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/players")
public class PlayersController {

  @Autowired
  private PlayersRepository repository;
  @Autowired
  private GamesRepository repositoryGames;

  @RequestMapping(value = "", method = RequestMethod.GET)
  public @ResponseBody  List<Players> getAllPlayers() {
    return repository.findAll();
  }

  @ApiOperation("Find Player by Id")
  @ApiResponses({
    @ApiResponse(code=200, message = "OK" , response = Players.class)
  })
  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public Players getPlayerById(@PathVariable("id") ObjectId id) {
    return repository.findBy_id(id);
  }

  // @RequestMapping(value = "/name/{name}", method = RequestMethod.GET)
  // public List<Players> getPlayerByName(@PathVariable("name") String name) {
  //   return repository.findByName(name);
  // }


  @ApiOperation("Creates a new Player")
  @ApiResponses({
    @ApiResponse(code=200, message = "OK" , response = Players.class)
  })
  @RequestMapping(value = "", method = RequestMethod.POST)
  public Players createPlayer(@RequestBody Players player) {
    player.setId(ObjectId.get());
    repository.save(player);
    return player;
  }


  // @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  // public void modifyPlayerById(@PathVariable("id") ObjectId id, @Valid @RequestBody Players player) {
  //   if (id != null) {
  //       player.setId(id);
  //   }
  //   repository.save(player);
  // }

  // @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  // public void deletePlayer(@PathVariable ObjectId id) {
  //   repository.delete(repository.findBy_id(id));
  // }

}