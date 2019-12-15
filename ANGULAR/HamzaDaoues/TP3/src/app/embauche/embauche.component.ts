import {Component, OnInit} from '@angular/core';
import {EmbaucheServiceService} from '../embauche-service.service';
import {Cv} from '../models/cv';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  private EmbaucheList: Cv[];
  private EmbaucheService: EmbaucheServiceService;

  constructor(EmbaucheService: EmbaucheServiceService) {
    this.EmbaucheService = EmbaucheService;
  }

  ngOnInit() {
    this.getEmbauche();
  }

  getEmbauche(): any {
    this.EmbaucheList = this.EmbaucheService.GetListEmbauche();
  }


}
