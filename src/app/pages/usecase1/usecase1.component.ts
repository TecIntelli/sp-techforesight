import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'ngx-usecase1',
  templateUrl: './usecase1.component.html',
})

/*
Diese Komponente liest die Date aus der api.service.ts aus und erhält somit das Quell-json.
*/

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
        const value = this.technologydatas;
            for (let i =0; i < value.length; i++) {
                let a = '{ "name": "' + value[i].parameter_1.value +
                 '", "series": [ {"name": "' + value[i].parameter_2.value +
                 '", "value":' + value[i].parameter_3.value + '},'
                ;
                console.log(a); }
      });
  }
}


