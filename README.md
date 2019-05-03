# Micro-Services-SpringBoot-Eureka
SpringBoot Micro-Services implementation and Eureka Discovery

To Run on Windows:

CORBA STUFF:
1) Using the CMD:
start orbd -ORBInitialPort 1050

2) Copy folder "productor_consumidor_files" to the root of your user path: "C:\Users\david\productor_consumidor_files"

3) Start the Corba Buffer service in "ServidorComponenteCORBA\src\server\BufferServer.java" (Run as Java Application)

4) If you want to act like manager to read and write news, run "Productor-Consumidor\src\client\Servlet.java" on Tomcat. There you can access the servlet to add news to the corba server, later you can read them from the Angular Client.



STARTING MICRO-SERVICES:

to start a micro-service, go to the root of the micro service and type:
$ mvn spring-boot:run

1) Start Eureka_Server in "eureka_server"


2) Start all of the other services:
    - asignar_juegos
    - asignar_seguidores
    - gestionar_juegos
    - gestionar_jugadores
    - verificar_datos
    - lookup_services (IMPORTANT, This talks to the Angular front-end to get dinamically the ports of the services)
    - corba_client (Reads all nes from corba and convert them to JSON son Angular que list in th Tab3)
    
 
 STARTING ANGULAR (IONIC 4) Client:
 
 1) Make sure you have NodeJs 10 LTS https://nodejs.org/en/ (with npm)
 
 2) Install the Ionic 4 CLI, if fails run on admin mode:
 
 $ npm install -g ionic
 
 3) To run the Angular (Ionic) just go to "angular_frontend" folder and type:
 
 $ ionic serve
 
 
 
 That´s it :D
    

