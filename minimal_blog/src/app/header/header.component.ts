import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  linkItems: string[];

  constructor() {
    this.linkItems = [
      '<a id="res" href="..\app.component.html">Resources</a>',
      '<a>Inspiration<i class="pi pi-angle-down"></i></a>',
      '<a>Courses<i class="pi pi-angle-down"></i></a>',
      '<a>Blog</a>'
    ];
  }


}
