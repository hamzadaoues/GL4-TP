import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../models/cv';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  @Input() cv:Cv;
  constructor() { }

  ngOnInit() {
  }

}
