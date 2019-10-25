import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CvService} from '../cv.service';
import {Cv} from '../models/cv';

@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrls: ['./liste-component.component.css']
})
export class ListeComponentComponent implements OnInit {
  @Output() changeCV = new EventEmitter<Cv>();

  CvList: Cv[] = [];
  cvservice: CvService;
  constructor(cvservice: CvService) {
    this.cvservice = cvservice;
  }

  ngOnInit() {
      this.CvList = this.cvservice.getCv();
  }
   onChangeCV(cv: Cv) {
    this.changeCV.emit(cv);
   }
}
