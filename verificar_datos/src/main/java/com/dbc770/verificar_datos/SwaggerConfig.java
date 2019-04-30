package com.dbc770.verificar_datos;

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
        return new Docket(DocumentationType.SWAGGER_2)  
          .select()                                  
          .apis(RequestHandlerSelectors.any())              
          .paths(PathSelectors.ant("/**"))                                    
          .build();                                           
    }

    private ApiInfo apiInfo(){
        return new ApiInfo
        ("Assign Game to Player API",
        "Add a Game Document from the games collection to a Player in players collection Micro-Service using MongoDB",
        "1", "termsOfServiceUrl",
        new Contact(
            "David Bejar Cacers",
            "Web Page", 
            "dbc770@inlumine.ual.es"),
        "license",
        "licenseUrl",
        Collections.emptyList());
    }
}