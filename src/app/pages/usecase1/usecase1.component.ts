import { Component, OnInit } from '@angular/core';
import { UsedataService } from '../../services/usedata.service';

@Component({
  selector: 'ngx-usecase1',
  templateUrl: './usecase1.component.html',
})

export class UseCase1Component implements OnInit {

  constructor(private service: UsedataService) {}
  testdata:any;


  ngOnInit() {
    // Methode aus Service muss eingelesen werden, ansonsten werden die Daten nicht geladen
    this.service.ngxInputFormat();
    this.testdata = this.service.apiData;
    console.log(this.testdata);
  }

}


