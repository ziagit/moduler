import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from '../../../../shared/sevices/event-handler.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  isSideMenuClosed:boolean;
  navigation=[
    {id:1, title:'Home'},
    {id:1, title:'Books'},
    {id:1, title:'Games'},
    {id:1, title:'Others'},
  ]
  constructor(private ehs: EventHandlerService) { 
    this.ehs.sideMenuEvent.subscribe(res=>{
      this.isSideMenuClosed=res;
    })
  }

  ngOnInit() {
  }
toggleSidebar(){
  this.isSideMenuClosed=!this.isSideMenuClosed;
  this.ehs.sideMenuHandler(this.isSideMenuClosed);
}
}
