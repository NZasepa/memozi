import { Action } from '@ngrx/store';

const spaceName = '[Game]';
export const INITIALIZE_GAME = `${spaceName} Initialize Game`;

export class InitializeGame implements Action {
  readonly type = INITIALIZE_GAME;

  constructor(public payload: any) { }
}

export type Actions = InitializeGame;
