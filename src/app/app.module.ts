import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { HighlightDirective } from './highlight.directive';
import { HighlightCardDirective } from './highlight-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HighlightDirective,
    HighlightCardDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
