import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stats-show',
  templateUrl: './stats-show.component.html',
  styleUrls: ['./stats-show.component.css']
})
export class StatsShowComponent implements OnInit {

  public typewriter_text: string = "./capstone generate --chart-stats";
  public typewriter_display: string = "";

  barChartOptions: ChartOptions = {
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: 'white'
        },
      }],
      xAxes: [{
        ticks: {
          fontColor: 'white'
        },
      }]
    },
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits', backgroundColor: "#fff" }
  ];

  barChartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
    } else {
      that.typewriter_display = "";
    }
    setTimeout(that.typingCallback, 300, that);
  }
  constructor() { }

  ngOnInit(): void {
    this.typingCallback(this);
  }




}
