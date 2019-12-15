import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../models/cv';
import {EmbaucheServiceService} from '../embauche-service.service';
import {Router} from '@angular/router';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  @Input() cv: Cv;
  private EmbaucheService: EmbaucheServiceService;
  private cvService: CvService;

  constructor(cvService: CvService, EmbaucheService: EmbaucheServiceService, private  router: Router) {
    this.EmbaucheService = EmbaucheService;
    this.cvService = cvService;

  }

  ngOnInit() {
  }

  Embauche(cv: Cv) {
    this.EmbaucheService.addCv(cv);
  }

  btnClick() {
    console.log('haha');
    this.router.navigateByUrl('/cvdetail/' + this.cv.id);
  }

  deleteCv(cv: Cv) {
    this.cvService.deleteCvByid(cv.id);
    this.router.navigateByUrl('/cvdetail');
  }
}
