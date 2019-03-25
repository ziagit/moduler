import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  cards=[
    {id:1,name:'test'},
    {id:2,name:'test'},
    {id:3,name:'test'},
    {id:4,name:'test'},
    {id:5,name:'test'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
