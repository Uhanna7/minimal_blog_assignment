import { Component } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  pagenumbers: string[];

  constructor() {
    this.pagenumbers = [
      '<a>01</a>',
      '<a>02</a>',
      '<a>Next Page</a>'
    ];
  }

}
