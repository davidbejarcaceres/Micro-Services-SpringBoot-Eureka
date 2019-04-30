package com.dbc770.verificar_datos;

import java.util.ArrayList;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.dbc770.verificar_datos.ValidadorDNI;


@CrossOrigin(origins = "*") //CORS security, Allows connecting to the API from external paths.
@RestController
@RequestMapping("/validator")
public class ValidateDNIController {

  @GetMapping("/dni/{dni}")
  public boolean validateDNI(@PathVariable("dni") String dni){
    if (dni != null) {
      /*TODO: Disabled for debugging reasons, only checking length 
      Ask the professor eather to change this later or not to enable strict validator*/
      //if(ValidadorDNI.validar(dni)){ 
      if(dni.length() == 9 || dni.length() == 10){ // accepts Spanish or Ecuadorean number of digits
        return true;
      }
    }
    return false;
  } 


  //TODO: Delete later in case of not neeeded of if you want to validate more data
  @GetMapping("/passport/{passport}")
  public boolean validatePassport(@PathVariable("passport") String passport){
    if (passport != null) {
      if (passport.length() == 10) {
        return true;
      }
    }
    return false;
  }


  //TODO: Delete later
  @GetMapping("/{nombre}")
  public String sayHiMethod(@PathVariable("nombre") String nombre){
    return ("Hola " + nombre + " desde micro con Metodo sin HTTP");
  } 
}