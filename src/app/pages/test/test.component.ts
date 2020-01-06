import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'ngx-test',
  templateUrl: './test.component.html',
})

//Laden aller json Daten mit Hilfe des ApiService
export class TestComponent implements OnInit {
  technologies: any[];

  constructor(private technologyStore: ApiService) {}

  ngOnInit() {
    this.technologyStore
      .loadAll()
      .subscribe(technologies => this.technologies = technologies);
  }
}
