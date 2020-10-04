import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { routes } from './app.routes'
import { AppComponent } from './app.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [AppComponent, ToolbarComponent, TopOfPageComponent],
  imports: [BrowserModule, SharedModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
