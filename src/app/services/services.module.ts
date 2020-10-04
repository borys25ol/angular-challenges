import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { ServiceDocumentationComponent } from './documentation/service-documentation.component'

const routes: Routes = [
  {
    path: '',
    component: ServiceDocumentationComponent,
  },
]

@NgModule({
  declarations: [ServiceDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ServicesModule {}
