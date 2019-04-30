package com.dbc770.asignar_seguidores;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
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
          .paths(PathSelectors.ant("/player**"))                                    
          .build();                                           
    }

    // private ApiInfo toApiInfo(Swagger2Properties swagger2Properties){
    //     return new ApiInfo
    //     ("Assign Follower to Player API",
    //     "Adds a follower to a Player, Spring Boot implementation",
    //     "1", "termsOfServiceUrl",
    //     new Contact(
    //         "David Bejar Cacers",
    //         "Web Page", 
    //         "dbc770@inlumine.ual.es"),
    //     "license",
    //     "licenseUrl",
    //     Collections.emptyList());
    // }

    /**
     * Set api info.
     *
     * @return Api info
     */
    ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Assign Follower to Player API")
                .description("Adds a follower to a Player, Spring Boot implementation")
                .license("Apache 2.0")
                .licenseUrl("http://www.apache.org/licenses/LICENSE-2.0.html")
                .termsOfServiceUrl("")
                .version("1.0")
                .contact(new Contact("David Bejar Cacers", "", "dbc770@inlumine.ual.es"))
                .build();
    }
}