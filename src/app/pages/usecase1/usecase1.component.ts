import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'ngx-usecase1',
  templateUrl: './usecase1.component.html',
})

//Laden aller json Daten mit Hilfe des ApiService
export class UseCase1Component implements OnInit {
  technologydatas: any;

  constructor(private config: ApiService) {}

  ngOnInit() {
    this.config.getData()
      .subscribe(data => {
        console.log(data);
        },
      );

      // liest aus Array "elements" alle Objekte aus
      this.config.getData()
      .subscribe(result => {
        this.technologydatas = result.elements;
        console.log(this.technologydatas);
      });
  }
}


