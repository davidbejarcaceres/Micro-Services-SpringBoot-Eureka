# Micro-Services-SpringBoot-Eureka
SpringBoot Micro-Services implementation and Eureka Discovery

Main Features:

    - Spring boot
    - Spring Boot Data Rest
    - Eureka Server
    - Eureka Discovery Client
    - Micro-services communication using feign
    - Swagger2 To document the API
    - Angular (Ionic 4) Front-end Client.
    - Asynchronous Programming for the Angular Client.
    - Angular Build with Web Components
    - MongoDB as Data Layer.
    - MongoDB DBref references between collections.


To Run on Windows:

DATA LAYER:
 1) Install MongoDB
 https://docs.mongodb.com/compass/master/install/
 
 2) Start running MongoDB service using the MongoDB Compass, or type in the CMD:
 
 $ net start MongoDB
 
 3) Restore the Database I added to the proyect, so you don´t start from an empty database:
 
    - Copy the "dump" folder to "C:\Program Files\MongoDB\Server\4.0\bin" (Mongodb bin directory)

    - To load the database, in the same bin folder , just open the CMD and type:

    - mongorestore --db micro_services_followers




CORBA STUFF:
1) Using the CMD:

$ start orbd -ORBInitialPort 1050

2) Copy folder "productor_consumidor_files" to the root of your user path: "C:\Users\david\productor_consumidor_files"

3) Start the Corba Buffer service in "ServidorComponenteCORBA\src\server\BufferServer.java" (Run as Java Application)

4) If you want to act like manager to read and write news, run "Productor-Consumidor\src\client\Servlet.java" on Tomcat. There you can access the servlet to add news to the corba server, later you can read them from the Angular Client.



STARTING MICRO-SERVICES:

to start a micro-service, go to the root of the folder  of a service and type:

$ mvn spring-boot:run

1) Start Eureka_Server in "eureka_server"


2) Start all of the other services:
    - asignar_juegos
    - asignar_seguidores
    - gestionar_juegos
    - gestionar_jugadores
    - verificar_datos
    - lookup_services (IMPORTANT, This talks to the Angular front-end to get dinamically the ports of the services)
    - corba_client (Reads all news from corba and convert them to JSON so Angular lists them in Tab3)
    
  If you want some info about the API you can use Swagger2: "http://localhost:PORT/swagger-ui.html"
    
 
 STARTING ANGULAR (IONIC 4) CLIENT:
 
 1) Make sure you have NodeJs 10 LTS https://nodejs.org/en/ (with npm)
 
 2) Install the Ionic 4 CLI, if fails run on admin mode:
 
    $ npm install -g ionic
 
 3) To run the Angular (Ionic) just go to "angular_frontend" folder and type:
 
    $ionic serve
 
 4) The app should detect dinamically the ports of all the micro-services and the corba client, thanks to looup-service.
 
 
 
 That´s it :D
    

