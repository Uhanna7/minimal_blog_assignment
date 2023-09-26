import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CardComponent } from './card/card.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { LazyLoadDirective } from './lazy-load.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    ImageSliderComponent,
    CardComponent,
    PaginatorComponent,
    LazyLoadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
