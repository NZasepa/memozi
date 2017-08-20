import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { StartComponent } from './start.component';
import { RouterModule } from '@angular/router';
import { START_ROUTES } from './start.routes';
import { NewGameComponent } from './new-game/new-game.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(START_ROUTES)
  ],
  declarations: [
    StartComponent,
    NewGameComponent
  ]
})
export class StartModule { }
