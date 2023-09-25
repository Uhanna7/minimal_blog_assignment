import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  content: {
    img: string;
    date: string;
    title: string;
    desc: string;
    author: string;
    num: number;
  }[] = [];

  images: string[] = [
    '../assets/card1.png',
    '../assets/card2.png',
    '../assets/card3.png',
    '../assets/card4.png',
    '../assets/card5.png',
  ];

  isPhonePortrait = false;
  

  constructor(private responsive: BreakpointObserver) {
    for (let i = 0; i < this.images.length; i++) {
      this.content.push({
        img: this.images[i],
        date: '29.Jun.2021',
        title: 'Richard Norton photorealistic rendering as real photos',
        desc: 'Many years ago, I worked for my parents who own a video production company.',
        author: 'By: Peter Rowardson',
        num: 175,
      });
    }
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
