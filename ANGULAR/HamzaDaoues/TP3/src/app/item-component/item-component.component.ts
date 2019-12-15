import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {Cv} from '../models/cv';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {
  @Input() cv:Cv;

  constructor() {
  }

  ngOnInit() {
  }

}
