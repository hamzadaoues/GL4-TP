export class Cv {

  public id: string;
  public nom: string;
  public prenom: string;
  public age: any;
  public cin: string;
  public job: string;
  public path: string;

  constructor(id, nom, prenom, age, cin, job, path) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.path = path;
  };
}
