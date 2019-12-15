import {Injectable} from '@angular/core';
import {Cv} from './models/cv';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheServiceService {
  cvList: Cv[] = [];

  constructor() {
  }

  addCv(Cv: Cv): any {
    this.cvList.push(Cv);
    console.log(this.cvList);
  }

  GetListEmbauche(): any {
    return this.cvList;
  }

}
