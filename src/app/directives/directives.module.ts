import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { DirectiveDocumentationComponent } from './documentation/directive-documentation.component'

const routes: Routes = [
  {
    path: '',
    component: DirectiveDocumentationComponent,
  },
]

@NgModule({
  declarations: [DirectiveDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DirectivesModule {}
