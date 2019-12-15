import {Component, OnInit} from '@angular/core';
import {Cv} from '../models/cv';
import {CvService} from '../cv.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {

  private cv: Cv;
  private cvService: CvService;
  private modif = false;

  constructor(cvService: CvService, private route: ActivatedRoute) {
    this.cvService = cvService;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cv = this.cvService.getCvByid(id);
  }

  modification() {
    this.modif = !this.modif;
  }

  save() {
    this.cvService.deleteCvByid(this.route.snapshot.paramMap.get('id'));
   // console.log(this.cv);
    this.cvService.addCv(this.cv);
  }
}
