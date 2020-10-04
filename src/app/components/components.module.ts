import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { ComponentDocumentationComponent } from './documentation/component-documentation.component'
import { AccordionComponent } from './accordion/accordion.component'
import { ProgressBarComponent } from './progress-bar/progress-bar.component'
import { StarRatingsComponent } from './star-ratings/star-ratings.component'
import { SharedModule } from '../shared/shared.module'

const routes: Routes = [
  {
    path: '',
    component: ComponentDocumentationComponent,
  },
]

@NgModule({
  declarations: [
    AccordionComponent,
    ComponentDocumentationComponent,
    ProgressBarComponent,
    StarRatingsComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ComponentsModule {}
