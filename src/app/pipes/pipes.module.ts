import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { PipeDocumentationComponent } from './documentation/pipe-documentation.component'

const routes: Routes = [
  {
    path: '',
    component: PipeDocumentationComponent,
  },
]

@NgModule({
  declarations: [PipeDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PipesModule {}
