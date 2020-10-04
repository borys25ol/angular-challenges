import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { routes } from './app.routes'
import { AppComponent } from './app.component'
import { DirectivesModule } from './directives/directives.module'
import { ServicesModule } from './services/services.module'
import { AccordionComponent } from './components/accordion/accordion.component'
import { CardComponent } from './components/card/card.component'
import { ComponentDocumentationComponent } from './components/documentation/component-documentation.component'
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component'
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component'

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    CardComponent,
    ComponentDocumentationComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    ToolbarComponent,
    TopOfPageComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
