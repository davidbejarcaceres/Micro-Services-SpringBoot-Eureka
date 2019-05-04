package com.dbc770.games.gestionar_juegos;

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

/**
 * @author David Bejar Caceres
 * 2019 dbc770@inlumine.ual.es
 */

@Configuration
@EnableSwagger2
public class SwaggerConfig {                                    
    @Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo())  
          .select()                                  
          .apis(RequestHandlerSelectors.any())              
          .paths(PathSelectors.ant("/games/**"))                                    
          .build();                                           
    }

    private ApiInfo apiInfo(){
        return new ApiInfo("Games API",
        "Games Micro-Service using MongoDB and Spring Boot Data",
        "1", "termsOfServiceUrl",
        new Contact("David Bejar Cacers",
        "Web Page", "dbc770@inlumine.ual.es"),
        "license", "licenseUrl",
        Collections.emptyList());
    }
}