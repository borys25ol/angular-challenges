import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { CardComponent } from './components/card/card.component'
import { AccordionComponent } from './components/accordion/accordion.component'
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component'
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component'
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component'
import { DocumentationComponent } from './components/documentation/documentation.component'
import { routes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    DocumentationComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
