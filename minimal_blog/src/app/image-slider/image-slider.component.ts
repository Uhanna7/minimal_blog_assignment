import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent {
  images: string[] = [
    '../assets/blog.png',
    '../assets/blog1.png',
    '../assets/blog2.png',
    '../assets/blog3.png',
    '../assets/blog4.png',
  ];
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  prevSlide() {
    if(this.currentIndex === 0) {
      this.currentIndex = this.images.length;
    }
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide() {
    if(this.currentIndex === this.images.length - 1) {
      this.currentIndex = -1;
    }
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }
}
