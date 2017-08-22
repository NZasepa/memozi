import { Action } from '@ngrx/store';
import { GameSettings } from './game.models';

const spaceName = '[Game]';
export const INITIALIZE_GAME = `${spaceName} Initialize Game`;

export class InitializeGame implements Action {
  readonly type = INITIALIZE_GAME;

  constructor(public payload: GameSettings) { }
}

export type Actions = InitializeGame;
