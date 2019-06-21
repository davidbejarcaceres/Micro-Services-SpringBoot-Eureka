ECHO Starting all micro-services with Maven


ECHO eureka_server
start cmd /c java -jar eureka_server/target/eureka_server-0.0.1-SNAPSHOT.jar

ECHO lookup_services
start cmd /c java -jar lookup_services/target/lookup_services-0.0.1-SNAPSHOT.jar

ECHO Waiting Eureka server to start before launching other services
SLEEP 30

ECHO gestionar_jugadores
start cmd /c java -jar gestionar_jugadores/target/gestionar_jugadores-0.0.1-SNAPSHOT.jar

ECHO gestionar_juegos
start cmd /c java -jar gestionar_juegos/target/gestionar_juegos-0.0.1-SNAPSHOT.jar

SLEEP 50

ECHO asignar_juegos
start cmd /c  java -jar asignar_juegos/target/asignar_juegos-0.0.1-SNAPSHOT.jar

ECHO asignar_seguidores
start cmd /c java -jar asignar_seguidores/target/asignar_seguidores-0.0.1-SNAPSHOT.jar

SLEEP 50

ECHO verificar_datos
start cmd /c java -jar verificar_datos/target/verificar_datos-0.0.1-SNAPSHOT.jar

ECHO corba_client
start cmd /c java -jar corba_client/target/corba-news-0.0.1-SNAPSHOT.jar

ECHO Waiting before launching Angular Front-end
SLEEP 60

ECHO angular_frontend
start cmd /c angular-http-server -p 8080 --path angular_frontend/www/

PAUSE