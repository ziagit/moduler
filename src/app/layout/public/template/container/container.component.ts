import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from '../../../../shared/sevices/event-handler.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
 /*  isSideMenuClosed:boolean; */

  constructor() { 
/*     this.ehs.sideMenuEvent.subscribe(res=>{
      this.isSideMenuClosed=res;
    }) */
  }

  ngOnInit() {
  }
/* toggleSidebar(){
  this.isSideMenuClosed=!this.isSideMenuClosed;
  this.ehs.sideMenuHandler(this.isSideMenuClosed);
} */
}
