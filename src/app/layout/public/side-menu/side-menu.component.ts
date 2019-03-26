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
        { name: "Home", path: "/home",icon:'assets/images/home.svg' },
        { name: "JavaScript", path: "/book",icon:'assets/images/javascript.svg' },
        { name: "Angular", path: "/game",icon:'assets/images/angular.svg' },
        { name: "Vue", path: "/video",icon:'assets/images/vue.svg' },
        { name: "React", path: "/game",icon:'assets/images/react.svg' },
        { name: "Ionic", path: "/video",icon:'assets/images/ionic.svg' },
        { name: "NodeJs", path: "/book",icon:'assets/images/node.svg' },
        { name: "Laravel", path: "/game",icon:'assets/images/laravel.svg' },
      );
    }
  }

}
