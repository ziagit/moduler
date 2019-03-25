import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
isTrue:boolean=false;
  constructor() { }

  ngOnInit() {
  }
toggle(){
  this.isTrue=!this.isTrue;
}
}
