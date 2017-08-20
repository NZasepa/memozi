import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { StartComponent } from './start.component';
import { RouterModule } from '@angular/router';
import { START_ROUTES } from './start.routes';
import { NewGameComponent } from './new-game/new-game.component';
import { ModeComponent } from './mode/mode.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import * as fromStart from './start.reducer';

export const reducers: ActionReducerMap<any> = {
  start: fromStart.reducer
};

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('start', reducers),
    RouterModule.forChild(START_ROUTES)
  ],
  declarations: [
    StartComponent,
    NewGameComponent,
    ModeComponent
  ]
})
export class StartModule { }
