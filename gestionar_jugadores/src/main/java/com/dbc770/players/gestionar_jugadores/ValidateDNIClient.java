package com.dbc770.players.gestionar_jugadores;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@FeignClient("CLIENT-VERIFICAR-DATOS")
public interface ValidateDNIClient {

    @GetMapping("/validator/dni/{dni}")
    public boolean validateDNI(@PathVariable("dni") String dni);  

    //TODO: Delete later
    @GetMapping("/validator/{nombre}")
    public String sayHiMethod(@PathVariable("nombre") String nombre);   
}