import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyscrollNgModule } from 'keyscroll-ng';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KeyscrollNgModule, HighlightModule],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
