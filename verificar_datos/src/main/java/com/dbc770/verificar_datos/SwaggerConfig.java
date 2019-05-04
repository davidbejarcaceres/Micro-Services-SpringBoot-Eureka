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


/**
 * @author David Bejar Caceres
 * 2019 dbc770@inlumine.ual.es
 */

@Configuration
@EnableSwagger2
public class SwaggerConfig {                                    
    @Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2).apiInfo((apiInfo()))  
          .select()                                  
          .apis(RequestHandlerSelectors.any())              
          .paths(PathSelectors.ant("/validator/**"))                                    
          .build();                                           
    }

    private ApiInfo apiInfo(){
        return new ApiInfo
        ("Validates Spanish DNI number",
        "Validates a Spanish DNI, returns boolean, can also validate a 10 digits passport if needed, by default only checks 9 or 10 digits because of developing purposes",
        "1", "termsOfServiceUrl",
        new Contact(
            "David Bejar Caceres",
            "Web Page", 
            "dbc770@inlumine.ual.es"),
        "license",
        "licenseUrl",
        Collections.emptyList());
    }
}