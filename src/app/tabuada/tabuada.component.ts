import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {

  tabuada: number;

  getTabuada() {
    let list: number[] = [];
    for(let i=1; i <= 10; i++)
      list.push(this.tabuada);
    return list;
  }

  constructor() { }

  ngOnInit() {
  }

}