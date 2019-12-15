import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  MyStyle = {
    fontsize: '80px',
    color: '#145',
    fontfamily: 'Aldhabi'
  };

  MyStyle2 = {
    'font-size': '80px',
    color: '#145',
    'font-family': 'Aldhabi'
  };

  changeStyle() {
     this.MyStyle2['font-family'] = this.MyStyle.fontfamily;
     this.MyStyle2.color = this.MyStyle.color;
     this.MyStyle2['font-size'] = this.MyStyle.fontsize;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
