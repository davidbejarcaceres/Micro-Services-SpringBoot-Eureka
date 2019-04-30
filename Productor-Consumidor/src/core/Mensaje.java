package core;

/**
 * Mensaje para encapsulacion de datos date y short_description
 * @author Manuel Martin Gonzalez
 *
 */
public class Mensaje {
	
	private String date;
	private String short_description;
        private String long_description;
	
	/**
	 * Constructor de un mensaje a partir de un date y un short_description (dato)
	 * @param mail cadena que representa el date
	 * @param elemento cadena que representa el dato
	 */
	public Mensaje(String mail, String short_description) {
		this.date = mail;
		this.short_description = short_description;
	}
        
        public Mensaje(String mail, String short_description, String long_description) {
		this.date = mail;
		this.short_description = short_description;
                this.long_description = long_description;
	}
	
	/**
	 * Constructor copia
	 * @param nuevo mensaje fuente
	 */
	public Mensaje(Mensaje nuevo) {
		this.date = nuevo.date;
		this.short_description = nuevo.short_description;
                this.long_description = nuevo.long_description;
	}

	/**
	 * Obtener date
	 * @return date
	 */
	public String getDate() {
		return date;
	}

	/**
	 * Establecer date
	 * @param date cadena que representa el date
	 */
	public void setDate(String date) {
		this.date = date;
	}

	/**
	 * Obtener short_description
	 * @return short_description
	 */
	public String getShort_description() {
		return short_description;
	}
        
        public String getLong_description() {
		return long_description;
	}

	/**
	 * Establecer short_description
	 * @param short_description cadena que representa el short_description
	 */
	public void setShort_description(String short_description) {
		this.short_description = short_description;
	}

        public void setLong_description(String long_description) {
		this.long_description = long_description;
	}
}
