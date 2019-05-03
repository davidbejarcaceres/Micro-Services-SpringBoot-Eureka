class GameClass {

    private _id: string;
    private name: string;
    private description: string;
    private portada: string;

  
    constructor(private id: string, private Name: string, private Description:  string, private Portada: string) {
      this._id = id;
      this.name = Name;
      this.description = Description;
      this.portada = Portada;
    }
  
    getId(): string{
      return this._id
    }
  
    setId(id: string){
      this._id = id;
    }
  
    getName(): string {
      return this.name;
    }
    getDescription(): string {
      return this.description;
    }
    setName(first: string ){
      this.name = first;
    }
    setDescription(descrip: string){
      this.description = descrip;
    }
  
    getPortada(): string {
      return this.portada;
    }
    setPortada(image: string){
      this.portada = image;
    }


    public toString(): string {
      return "{" +
          " id:'" + this.getId() + "'" +
          ", name:'" + this.getName() + "'" +
          ", description:'" + this.getDescription() + "'" +
          ", portada:'" + this.getPortada() + "'" +
          "}";
    }
  }