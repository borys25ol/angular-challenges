import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { CardComponent } from './components/card/card.component'
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
