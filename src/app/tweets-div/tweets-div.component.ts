import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweets-div',
  templateUrl: './tweets-div.component.html',
  styleUrls: ['./tweets-div.component.css']
})

export class TweetsDivComponent implements OnInit {

  constructor() { }
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
  ngOnInit(): void {
  }


}


