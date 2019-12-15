import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {

  colorStyle: any;
  fontSize: any;
  fontPolice: any;

  constructor() {
  }

  ngOnInit() {
    this.StyleChange1();
  }

  StyleChange1() {
    this.colorStyle = 'pink';
    this.fontSize = '24px';
    this.fontPolice = 'Helvetica';
  }

  StyleChange2() {
    this.colorStyle = 'red';
    this.fontSize = '40px';
    this.fontPolice = 'Avantgarde';
  }

  StyleChange3() {
    this.colorStyle = 'blue';
    this.fontSize = '80px';
    this.fontPolice = 'Didot';
  }
}
