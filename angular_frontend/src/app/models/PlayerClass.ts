class PlayerClass {

  public _id: string;
  public name: string;
  public lastname: string;
  public age: string;
  public dni: string;
  public games: [];
  public followers: [];
  public following: [];

  constructor(private id: string, private firstnameInit: string, private lastnameInit:  string, private ageInit: string, private DNI: string, private Games: [] , private Followers: [], private Following: [] ) {
    this._id = id;
    this.name = firstnameInit;
    this.lastname = lastnameInit;
    this.age = ageInit;
    this.games = Games;
    this.followers = Followers;
    this.Following = Following;
    this.dni = DNI;
  }

  public getId(): string{
    return this._id
  }

  public setId(id: string){
    this._id = id;
  }

  public getName(): string {
    return this.name;
  }
  public getLastName(): string {
    return this.lastname;
  }
  public setName(first: string ){
    this.name = first;
  }
  public setLastName(last: string){
    this.lastname = last;
  }

  public getAge(): string {
    return this.age;
  }
  public setAge(age_new: string){
    this.age = age_new;
  }

  public getDNI(): string {
    return this.dni;
  }
  public setDNI(DNI: string){
    this.dni = DNI;
  }

  public getGames(): []{
    return this.games;
  }

  public setGames(games: []){
    this.games = games;
  }


  public getFollowers(): []{
    return this.followers;
  }

  public setFollowers(Followers: []){
    this.followers = Followers;
  }

  public getFollowing(): []{
    return this.following;
  }

  public setFollowing(Following: []){
    this.followers = Following;
  }

  public getFollowersNumber(): number{
    this.followers.keys();
    return 1;
  }

  public toString(): string {
    return "{" +
        " _id:'" + this.getId() + "'" +
        ", name:'" + this.getName() + "'" +
        ", lastname:'" + this.getLastName() + "'" +
        ", age:'" + this.getAge() + "'" +
        ", dni:'" + this.getDNI() + "'" +
        ", games:'" + this.getGames() + "'" +
        ", followers:'" + this.getFollowers() + "'" +
        ", following:'" + this.getFollowing() + "'" +
        "}";
}
}