import { Routes } from '@angular/router'

import { ComponentDocumentationComponent } from './components/documentation/component-documentation.component'
import { DirectiveDocumentationComponent } from './directives/documentation/directive-documentation.component'
import { ServiceDocumentationComponent } from './services/documentation/service-documentation.component'
import { PipeDocumentationComponent } from './pipes/documentation/pipe-documentation.component'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./components/components.module').then(
        (m) => m.ComponentsModule
      )
    },
  },
  {
    path: 'directives',
    loadChildren: () => {
      return import('./directives/directives.module').then(
        (m) => m.DirectivesModule
      )
    },
  },
  {
    path: 'pipes',
    loadChildren: () => {
      return import('./pipes/pipes.module').then((m) => m.PipesModule)
    },
  },
  {
    path: 'services',
    loadChildren: () => {
      return import('./services/services.module').then((m) => m.ServicesModule)
    },
  },
]
