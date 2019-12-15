import {Component, OnInit} from '@angular/core';
import {Cv} from '../models/cv';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {

  selected_cv: Cv;

  constructor() {
  }

  ngOnInit() {
  }

  changeCV(cv: Cv) {
    this.selected_cv = cv;
    console.log(cv);
  }
}
