import {Injectable} from '@angular/core';
import {Cv} from './models/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  cv_array: Cv[] = [];
  item1: Cv;

  constructor() {
    this.item1 = new Cv('1', 'hamza', 'prenom', 22, '11401432', 'etudiant', 'eeee');
    this.cv_array.push(this.item1);
    this.item1 = new Cv('2', 'skander', 'meziane', 22, '102548', 'devloppeur', 'eeee');
    this.cv_array.push(this.item1);
    this.item1 = new Cv('3', 'sinda', 'salem', 22, '1029548', 'sap consultant', 'eeee');
    this.cv_array.push(this.item1);
  }

  getCv(): any {

    return this.cv_array;
  }

  getCvByid(id): Cv {
    for (const cv of this.cv_array) {
      if (cv.id == id) {
        return cv;
      }
    }
  }

  deleteCvByid(id): void {
    this.cv_array = this.cv_array.filter(cv => cv.id !== id);
    console.log(this.cv_array);
  }

  addCv(cv): void {
    console.log(cv);
    this.cv_array.push(cv);
  }
}
