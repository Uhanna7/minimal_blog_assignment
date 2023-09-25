import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

listItems: string[];
isPhonePortrait = false;


constructor(private responsive: BreakpointObserver) {
  this.listItems = [
    'Career & Success',
    'Personal Development',
    'Communication Skills',
    'Leadership & Management',
    'Relationships',
    'Self-Care & Mindfulness'
  ]
}

ngOnInit() {
  this.responsive.observe(Breakpoints.HandsetPortrait)
    .subscribe(result => {

      this.isPhonePortrait = false; 

      if (result.matches) {
        this.isPhonePortrait = true;
      }

  });
}

}
