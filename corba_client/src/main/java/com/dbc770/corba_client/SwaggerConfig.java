package com.dbc770.corba_client;

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
        ("Get News from Corba",
        "Reads all news from Corba, ",
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