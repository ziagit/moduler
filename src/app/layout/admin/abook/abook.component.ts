import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { AbookDialogComponent } from '../dialogs/abook-dialog/abook-dialog.component';
import { DataService } from '../../public/services/data.service';

@Component({
  selector: 'app-abook',
  templateUrl: './abook.component.html',
  styleUrls: ['./abook.component.scss']
})
export class AbookComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'author', 'publisher', 'publish_date', 'summary','image_path', 'pdf_path', 'mp3_path', 'edit', 'delete'];
  dataSource = new MatTableDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: DataService, private dialog: MatDialog) {
      this.service.getBooks().subscribe(res => {
          this.dataSource = res['books'];
      })
  }
  ngOnInit() {
      this.dataSource.paginator = this.paginator;
  }

  add(){
    let dialogRef=this.dialog.open(AbookDialogComponent,{
        width:'600px'
    })
  }
}
