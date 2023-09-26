import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  linkItems: string[];
  isPhonePortrait = false;


  constructor(private responsive: BreakpointObserver) {
    this.linkItems = [
      '<a href="..\app.component.html">Resources</a>',
      '<a>Inspiration<i class="pi pi-angle-down"></i></a>',
      '<a>Courses<i class="pi pi-angle-down"></i></a>',
      '<a>Blog</a>'
    ];
  }

  ngOnInit() {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;

      if (result.matches) {
        this.isPhonePortrait = true;
      }
    });
  }

}
