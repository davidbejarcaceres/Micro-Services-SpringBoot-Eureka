package com.dbc770.players.gestionar_jugadores;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.bson.types.ObjectId;


@FeignClient("CLIENT-ASIGNAR-JUEGOS")
public interface AssignGameClient {

    @GetMapping("/hi/{name}")
    public String sayHi(@PathVariable("name") String name);

    //TODO: Test sending the game document directly so no ObjectId is passed using hexConertions
    @GetMapping("/player/{id_player}/game/{id_game}")
    public boolean addGameToPlayer(@PathVariable("id_player") ObjectId id_player, @PathVariable("id_game") ObjectId id_game );
    
}