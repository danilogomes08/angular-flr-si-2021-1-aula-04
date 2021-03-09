import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenorodd',
  templateUrl: './evenorodd.component.html',
  styleUrls: ['./evenorodd.component.css']
})
export class EvenoroddComponent implements OnInit {

  number: number;

  isEven() {
    return this.number % 2 == 0;
  }

  isOdd() {
    return this.number % 2 != 0;
  }

  constructor() { }

  ngOnInit() {
  }

}