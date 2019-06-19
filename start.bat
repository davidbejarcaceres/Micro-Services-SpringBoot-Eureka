ECHO Starting all micro-services with Maven


ECHO eureka_server
start cmd /c mvn spring-boot:run -f eureka_server/pom.xml

ECHO lookup_services
start cmd /c mvn spring-boot:run -f lookup_services/pom.xml

ECHO Waiting Eureka server to start before launching other services
SLEEP 40

ECHO gestionar_jugadores
start cmd /c mvn spring-boot:run -f gestionar_jugadores/pom.xml

ECHO gestionar_juegos
start cmd /c mvn spring-boot:run -f gestionar_juegos/pom.xml

SLEEP 50

ECHO asignar_juegos
start cmd /c mvn spring-boot:run -f asignar_juegos/pom.xml

ECHO asignar_seguidores
start cmd /c mvn spring-boot:run -f asignar_seguidores/pom.xml

SLEEP 60

ECHO verificar_datos
start cmd /c mvn spring-boot:run -f verificar_datos/pom.xml

ECHO corba_client
start cmd /c mvn spring-boot:run -f corba_client/pom.xml

ECHO Waiting before launching Angular Front-end
SLEEP 60

ECHO angular_frontend
start cmd /c angular-http-server -p 8080 --path angular_frontend/www/

PAUSE