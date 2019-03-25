import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  links = [];
  constructor() {
    this.checkUser();
  }

  ngOnInit() {
  }

  checkUser() {
    if (localStorage.getItem('user_role') == 'admin') {
      this.links.push(
        { name: "Dashboard", path: "/admin/dashboard" },
        { name: "Books", path: "/admin/book" },
        { name: "Games", path: "/admin/game" },
        { name: "Videos", path: "/admin/video" },
      );
    }else{
      this.links.push(
        { name: "Home", path: "/home" },
        { name: "Books", path: "/book" },
        { name: "Games", path: "/game" },
        { name: "Videos", path: "/video" },
      );
    }
  }

}
