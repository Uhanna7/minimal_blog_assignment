import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

listItems: string[];

constructor() {
  this.listItems = [
    'Career & Success',
    'Personal Development',
    'Communication Skills',
    'Leadership & Management',
    'Relationships',
    'Self-Care & Mindfulness'
  ]
}

}
