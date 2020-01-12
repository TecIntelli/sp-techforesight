import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

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
        console.log(data),
        // wirft error falls etwas an der api nicht passt
        (err:  HttpErrorResponse) => {
         console.log (err.message + ' -Daten aus API werden nicht geladen- ');
          };
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
