import { Routes } from '@angular/router';
import { StartComponent } from './start.component';
import { NewGameComponent } from './new-game/new-game.component';
import { ModeComponent } from './mode/mode.component';

export const START_ROUTES: Routes = [
  {
    path: '',
    component: StartComponent,
    children: [
      {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: NewGameComponent
      },
      {
        path: 'mode',
        component: ModeComponent
      }
    ]
  }
];
