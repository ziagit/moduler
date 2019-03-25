import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books:any;
  constructor(private service: DataService) { 
    this.service.getBooks().subscribe(res=>{
      this.books=res['books'];
      console.log("books: ", this.books)
    })
  }

  ngOnInit() {
  }

}
