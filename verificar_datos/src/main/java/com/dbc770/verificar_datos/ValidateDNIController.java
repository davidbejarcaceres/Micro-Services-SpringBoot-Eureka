package com.dbc770.verificar_datos;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*") //CORS security, Allows connecting to the API from external paths.
@RestController
@RequestMapping("/validator")
public class ValidateDNIController {

  @GetMapping("/dni/{dni}")
  public boolean validateDNI(@PathVariable("dni") String dni){
    if (dni != null) {
      /*TODO: Disabled for debugging reasons, only checking length (9 for Spanish DNI, and 10 por my passport)
      Ask the professor eather to change this later or not to enable strict validator*/
      //if(ValidadorDNI.validar(dni)){ 
      if(dni.length() == 9 || dni.length() == 10){ // accepts Spanish or Ecuadorean number of digits
        return true;
      } else {
        return false;
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
}