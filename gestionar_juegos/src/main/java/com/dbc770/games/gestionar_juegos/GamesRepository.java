package com.dbc770.games.gestionar_juegos;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RepositoryRestResource(collectionResourceRel = "games", path = "games_API_INFO")
public interface GamesRepository extends MongoRepository<Games, String> {

  Games findBy_id(ObjectId _id);
  public List<Games> findByName(String name);
}