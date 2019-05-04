package com.dbc770.players.gestionar_jugadores.Repositories;

import java.util.List;
import com.dbc770.players.gestionar_jugadores.models.Players;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "players", path = "players")
public interface PlayersRepository extends MongoRepository<Players, String> {

  Players findBy_id(ObjectId _id);
  public List<Players> findByName(String name);
  List<Players> findByDni(String dni);
  List<Players> findByLastname(String lastname);
}