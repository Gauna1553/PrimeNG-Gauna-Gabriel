import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  constructor() { }

  ngOnInit(): void {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#FFA726',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  };
  this.basicOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#000000'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#000000'
            },
            grid: {
                color: 'rgb(255,255,255)'
            }
        },
        y: {
            ticks: {
                color: '#000000'
            },
            grid: {
                color: 'rgb(255,255,255)'
            }
        }
    }
};
  }

}
