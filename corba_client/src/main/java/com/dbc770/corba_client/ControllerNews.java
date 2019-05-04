package com.dbc770.corba_client;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import com.dbc770.BufferApp.Buffer;
import com.dbc770.BufferApp.BufferHelper;

import org.omg.CORBA.ORB;
import org.omg.CORBA.StringHolder;
import org.omg.CosNaming.NamingContextExt;
import org.omg.CosNaming.NamingContextExtHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "*") //CORS security, Allows connecting to the API from external paths.
@RestController
@RequestMapping("/corba")
public class ControllerNews {


	private static final long serialVersionUID = 1L;
	private String[] args = {"-ORBInitialPort","1050","ORBInitialHost","localhost"};
	private ORB orb;
	private org.omg.CORBA.Object objRef;
	private NamingContextExt ncRef;
	private String name;
	private Buffer bufferImpl;
	private StringHolder elem;
	private CoderXML empaquetador;
	private DecoderXML desempaquetador;
	private Validador validador;
	private String nombre_archivo;
	private String ruta_archivo;
  private Boolean firstRead;

    @GetMapping("/news")
    public List<Mensaje> readNews(){
      connectsCorba();
      return readAll();
    }

  private void connectsCorba() {

    try{
      this.orb = ORB.init(args, null);
      this.objRef = orb.resolve_initial_references("NameService");
      this.ncRef = NamingContextExtHelper.narrow(objRef);
      this.name = "Buffer";
      this.bufferImpl = BufferHelper.narrow(ncRef.resolve_str(name));
    } catch (Exception e) {
      System.out.println("ERROR : " + e);
      e.printStackTrace(System.out);
    }
        this.nombre_archivo = "documentoProductorConsumidor";
        this.ruta_archivo = System.getProperty("user.home")+File.separator+"productor_consumidor_files"+File.separator+nombre_archivo+".xml";
        this.firstRead = false;
  }





  public List<Mensaje> readAll(){
    {
      List<Mensaje> mensajes = new ArrayList<Mensaje>();
      elem = new StringHolder();
      //leer XML del servidor en forma de String (el XML contiene varios mensajes)
      if(bufferImpl.readAll(elem)){
        empaquetador = new CoderXML(nombre_archivo);
        //crear archivo XML (con todos los mensajes) leido a partir del String
        if(empaquetador.empaquetarTodos(elem.value)){
          desempaquetador = new DecoderXML(empaquetador.getRutaArchivoXML());
          //desempaquetar datos (todos los mensajes) del archivo XML
          Pair<Boolean, ArrayList<Mensaje>> nuevo = new Pair<Boolean, ArrayList<Mensaje>>(desempaquetador.desempaquetar());
          mensajes = nuevo.second();
          if(nuevo.first()){
            System.out.println("El buffer contiene  " +nuevo.second().size()+ " elementos.");
            for (Mensaje mensaje : nuevo.second()) {
              System.out.println(mensaje.toString());
            }
            return mensajes;
          }else{
            System.out.println("[ERROR]: Los mensajes no se han desempaquetado correctamente.");
          }
        }else{
          System.out.println("[ERROR]: Los mensajes no se han desempaquetado correctamente.");
        }
      }else{
        System.out.println("[ERROR]: Elementos no leidos [Buffer vacio].");
        return mensajes;
      } return mensajes;
    }

  }
}