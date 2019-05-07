package com.dbc770.players.gestionar_jugadores;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {                                    
    @Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo())  
          .select()                                  
          .apis(RequestHandlerSelectors.any())              
          .paths(PathSelectors.ant("/players/**"))                                    
          .build();                                           
    }

    private ApiInfo apiInfo(){
        return new ApiInfo
        ("Players API",
        "Players Micro-Service, in Charge of players, CRUD operations on top of MongoDB with Feign capabilities.",
        "1", "termsOfServiceUrl",
        new Contact(
            "David Bejar Caceres",
            "Web Page", 
            "dbc770@inlumine.ual.es"),
            "GPL 2", "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
        Collections.emptyList());
    }
}