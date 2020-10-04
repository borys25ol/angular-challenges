import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { PipeDocumentationComponent } from './documentation/pipe-documentation.component'
import { SharedModule } from '../shared/shared.module'
import { TruncatePipe } from './truncate/truncate.pipe'

const routes: Routes = [
  {
    path: '',
    component: PipeDocumentationComponent,
  },
]

@NgModule({
  declarations: [PipeDocumentationComponent, TruncatePipe],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PipesModule {}
