import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module'
import { ComponentDocumentationComponent } from './documentation/component-documentation.component'
import { AccordionComponent } from './accordion/accordion.component'
import { ProgressBarComponent } from './progress-bar/progress-bar.component'
import { StarRatingsComponent } from './star-ratings/star-ratings.component'
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { LoaderComponent } from './loader/loader.component'

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
    CreditCardInputComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
})
export class ComponentsModule {}
