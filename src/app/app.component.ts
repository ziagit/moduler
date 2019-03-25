import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints,BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'san';
  isMobile:boolean;
  observerSubscription: Subscription;
  constructor(private breakpointObserver: BreakpointObserver) {
    
    this.observerSubscription = this.breakpointObserver.observe([Breakpoints.Web]).subscribe(
      (resulst:BreakpointState)=>{
        this.isMobile = resulst.matches;
      }
    )

  }
}
