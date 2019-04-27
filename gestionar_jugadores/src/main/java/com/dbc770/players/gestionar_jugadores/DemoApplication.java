package com.dbc770.players.gestionar_jugadores;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import io.github.kaiso.relmongo.config.EnableRelMongo;

@SpringBootApplication
@EnableDiscoveryClient
@EnableRelMongo
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
