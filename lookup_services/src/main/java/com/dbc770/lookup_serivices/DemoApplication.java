package com.dbc770.lookup_serivices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@EnableDiscoveryClient
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}

@CrossOrigin(origins = "*") //CORS security, Allows connecting to the API from external paths.
@RestController
class ServiceInstanceRestController {

    @Autowired
    private DiscoveryClient discoveryClient;

    // Lookup for all the info of a service, port, host, description, and many more metadata
    @GetMapping("/lookup/{applicationName}")
    public List<ServiceInstance> serviceInstancesByApplicationName(
            @PathVariable String applicationName) {
        return this.discoveryClient.getInstances(applicationName);
    }
    
    // Only the URI of the micro-service, this is used by the Angular front-end
    @GetMapping("/lookup/url/{applicationName}")
    public String serviceURL(@PathVariable String applicationName) {
        if (this.discoveryClient.getInstances(applicationName) != null && !this.discoveryClient.getInstances(applicationName).isEmpty()) {
            List<ServiceInstance> ListaServicios = this.discoveryClient.getInstances(applicationName);
            ServiceInstance primerServicioDisponible = ListaServicios.get(0);
            String url = primerServicioDisponible.getUri().toString();
            return url;
        }
        return null; // No Service
	}
}
