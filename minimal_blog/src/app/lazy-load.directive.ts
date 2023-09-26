import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective {
  @Input() appLazyLoad: string | undefined;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.isElementInViewport() && this.appLazyLoad) {
      this.el.nativeElement.setAttribute('src', this.appLazyLoad);
    }
  }

  private isElementInViewport(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
