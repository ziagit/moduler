import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DataService } from '../services/data.service';
import { UserType } from './user.type';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    /* data: UserType[]; */
    data: any;
    displayedColumns: string[] = ['id', 'name', 'email', 'edit', 'delete'];
    dataSource = new MatTableDataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private service: DataService) {
        this.service.getUsers().subscribe(res => {
            this.dataSource = res;
        })
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
}