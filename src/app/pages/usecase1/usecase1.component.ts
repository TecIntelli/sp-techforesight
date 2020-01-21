import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {MultiItem} from '../../models/ngxradar';

@Component({
  selector: 'ngx-usecase1',
  templateUrl: './usecase1.component.html',
})

/*
Diese Komponente liest die Date aus der api.service.ts aus und erhält somit das Quell-json.
*/

//Laden aller json Daten mit Hilfe des ApiService
export class UseCase1Component implements OnInit {
  // technologydatas: any;
  apiData: MultiItem[];

  constructor(private config: ApiService) {
    this.apiData = [];
  }

  ngOnInit() {
    this.config.getData()
      .subscribe(data => {
          data.elements.forEach((item, index) => {
            const mItem = this.apiData.find( param1 => param1.name === item.parameter_1.value);
            if (mItem) {
              const sItem = mItem.series.find(param2 => param2.name === item.parameter_2.value);
              if (!sItem) {
                mItem.series.push({
                  name: item.parameter_2.value,
                  value: item.parameter_3.value,
                });
              }
            } else {
              this.apiData.push({
                name: item.parameter_1.value,
                series: [{
                  name: item.parameter_2.value,
                  value: item.parameter_3.value,
                }],
              });
            }
          });
          // Console log nur zur Überprüfung der Konvertierung
          console.log(JSON.stringify(this.apiData));
      });
    
/*    this.config.getData()
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
      });*/
  }
}


