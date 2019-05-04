package com.dbc770.players.gestionar_jugadores.Repositories;

import com.dbc770.players.gestionar_jugadores.models.Games;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GamesRepository extends MongoRepository<Games, String> {}