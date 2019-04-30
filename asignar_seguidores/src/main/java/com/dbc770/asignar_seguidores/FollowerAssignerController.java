package com.dbc770.asignar_seguidores;

import java.util.ArrayList;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*") //CORS security, Allows connecting to the API from external paths.
@RestController
@RequestMapping("")
public class FollowerAssignerController {

  @Autowired
  private PlayersRepository repositoryPlayers;

  @PutMapping(value = "/player/{id}/follower/{id_to_follow}")
  public ResponseEntity<Players> asignFollowerToPlayerByID(@PathVariable("id") ObjectId id, @PathVariable("id_to_follow") ObjectId id_to_follow ) {

    Players player = new Players();
    if (repositoryPlayers.existsById(id.toString())) {
      player = repositoryPlayers.findBy_id(id);
      if (player._id != id_to_follow && repositoryPlayers.existsById(id_to_follow.toString())) {
          if (player.getFollowing() != null) {
            player.following.add(id_to_follow);
            repositoryPlayers.save(player);
            addfollowerToFollowing(id_to_follow, player._id);
            return ResponseEntity.status(200).body(player);
          } else {
            player.following = new ArrayList<ObjectId>();
            player.following.add(id_to_follow);
            addfollowerToFollowing(id_to_follow, player._id);       
          }
      } else{
        return ResponseEntity.ok().body(player);
      }
      repositoryPlayers.save(player);
    } else{
      return ResponseEntity.status(404).body(null);
    }
    return ResponseEntity.ok().body(player);
  }

  @DeleteMapping(value = "/player/{id}/follower/{id_to_follow}")
  public ResponseEntity<Players> deleteFollowerFromPlayerByID(@PathVariable("id") ObjectId id, @PathVariable("id_to_follow") ObjectId id_to_follow ) {
    Players player = new Players();
    if (repositoryPlayers.existsById(id.toString())) {
      player = repositoryPlayers.findBy_id(id);
      if (player._id != id_to_follow && repositoryPlayers.existsById(id_to_follow.toString())) {
          if (player.following != null) {
            player.following.remove(id_to_follow);
            repositoryPlayers.save(player);
            deletefollowerToFollowing(id_to_follow, player._id);
            return ResponseEntity.status(200).body(player);
          }
      } else{
        return ResponseEntity.ok().body(player);
      }
      repositoryPlayers.save(player);
    } else{
      return ResponseEntity.status(404).body(null);
    }
    return ResponseEntity.ok().body(player);
  }


  public void addfollowerToFollowing(ObjectId id_actual, ObjectId id_follower){
    if (id_actual!= null && id_follower != null ) {
      if (repositoryPlayers.existsById(id_actual.toString())) {
        Players actualPlayer = repositoryPlayers.findBy_id(id_actual);
        if (actualPlayer.getFollowers() != null) {
          actualPlayer.followers.add(id_follower);
          repositoryPlayers.save(actualPlayer);
        } else{
          actualPlayer.followers = new ArrayList<ObjectId>();
          actualPlayer.followers.add(id_follower);
          repositoryPlayers.save(actualPlayer);
        }
      }
    }
  }

  public void deletefollowerToFollowing(ObjectId id_actual, ObjectId id_follower){
    if (id_actual!= null && id_follower != null ) {
      if (repositoryPlayers.existsById(id_actual.toString())) {
        Players actualPlayer = repositoryPlayers.findBy_id(id_actual);
        if (actualPlayer.getFollowers() != null) {
          actualPlayer.followers.remove(id_follower);
          repositoryPlayers.save(actualPlayer);
        }
      }
    }
  }
  

  //TODO: Delete later
  @GetMapping(value="/hi/{name}")
  public String sayHi(@PathVariable("name") String name){
    if (name!= null) {
      return ("Hi  "+ name + "  from the asignar-jugadores micro-service");
    }
    return ("Hi  from the asignar-jugadores micro-service");
  }
}