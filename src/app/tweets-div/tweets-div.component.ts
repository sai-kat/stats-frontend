import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweets-div',
  templateUrl: './tweets-div.component.html',
  styleUrls: ['./tweets-div.component.css']
})

export class TweetsDivComponent implements OnInit {

  constructor() { }
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';
  entries = [
    {
      header: 'header',
      content: 'content'
    },
    {
      header: 'header',
      content: 'content'
    },
    {
      header: 'header',
      content: 'content'
    },
    {
      header: 'header',
      content: 'content'
    }
  ];
  ngOnInit(): void {
  }


}


