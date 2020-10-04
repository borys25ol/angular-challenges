import { Routes } from '@angular/router'

import { DocumentationComponent as ComponentsDocumentation } from './components/documentation/documentation.component'
import { DocumentationComponent as DirectivesDocumentation } from './directives/documentation/documentation.component'
import { DocumentationComponent as PipesDocumentation } from './pipes/documentation/documentation.component'
import { DocumentationComponent as ServicesDocumentation } from './services/documentation/documentation.component'

export const routes: Routes = [
  {
    path: '',
    component: ComponentsDocumentation,
  },
  {
    path: 'directives',
    component: DirectivesDocumentation,
  },
  {
    path: 'pipes',
    component: PipesDocumentation,
  },
  {
    path: 'services',
    component: ServicesDocumentation,
  },
]
