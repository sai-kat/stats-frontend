// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stats-frontend';
  public typewriter_text: string = "./capstone generate --chart-stats";
public typewriter_display: string = "";

noOfTweets: number = 10;
entries = [
  {
    username: 'username',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas',
    time: '23h'
  },
  {
    username: 'username',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas',
    time: '23h'
  },
  {
    username: 'username',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas',
    time: '23h'
  },
  {
    username: 'username',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas',
    time: '23h'
  }
];

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
