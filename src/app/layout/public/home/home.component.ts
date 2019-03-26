import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/assets/static-data.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  issues;

  constructor(private service: StaticDataService) { 
    this.issues=this.service.getBooks()
    
  }

  ngOnInit() {
  }

}
