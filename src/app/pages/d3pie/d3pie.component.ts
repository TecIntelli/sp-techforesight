import { Component, OnDestroy } from '@angular/core';




@Component({
  selector: 'ngx-d3pie',
  templateUrl: './d3pie.component.html',
  styleUrls: [ './d3pie.component.scss' ],
})
export class D3PieComponent  {
  name = 'Angular';

  colorScheme = {
    domain: ['#08DDC1', '#FFDC1B', '#FF5E3A']
  };

  data = [
  {
    "name": "green",
    "series": [
      {
        "name": "Aug",
        "value": 14
      },
      {
        "name": "Sep",
        "value": 35
      },
      {
        "name": "Oct",
        "value": 4
      },
      {
        "name": "Nov",
        "value": 17
      },
      {
        "name": "Dec",
        "value": 14
      },
      {
        "name": "Jan",
        "value": 35
      }
    ]
  },

  {
    "name": "yellow",
    "series": [
      {
        "name": "Aug",
        "value": 364
      },
      {
        "name": "Sep",
        "value": 412
      },
      {
        "name": "Oct",
        "value": 437
      },
      {
        "name": "Nov",
        "value": 437
      },
      {
        "name": "Dec",
        "value": 364
      },
      {
        "name": "Jan",
        "value": 412
      }
    ]
  },
  {
    "name": "red",
    "series": [
      {
        "name": "Aug",
        "value": 168
      },
      {
        "name": "Sep",
        "value": 343
      },
      {
        "name": "Oct",
        "value": 512
      },
      {
        "name": "Nov",
        "value": 291
      },
      {
        "name": "Dec",
        "value": 168
      },
      {
        "name": "Jan",
        "value": 343
      },
    ]
  }
]
}
