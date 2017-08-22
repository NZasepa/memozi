import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GameComponent } from './game.component';
import { RouterModule } from '@angular/router';
import { GAME_ROUTES } from './game.routes';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import * as fromGame from './game.reducer';

export const reducers: ActionReducerMap<any> = {
  game: fromGame.reducer
};

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('game', reducers),
    RouterModule.forChild(GAME_ROUTES)
  ],
  declarations: [
    GameComponent
  ]
})
export class GameModule { }
