package com.dbc770.asignar_juegos;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PlayersRepository extends MongoRepository<Players, String> {

  Players findBy_id(ObjectId _id);
  Players findByDni(String dni);  
}