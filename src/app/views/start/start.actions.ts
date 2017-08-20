import { Action } from '@ngrx/store';

const spaceName = '[Start]';
export const START_THE_GAME = `${spaceName} Start The Game`;
export const SELECT_MODE = `${spaceName} Select Mode`;

export class StartTheGame implements Action {
  readonly type = START_THE_GAME;

  constructor(public payload: any = null) { }
}

export class SelectMode implements Action {
  readonly type = SELECT_MODE;

  constructor(public payload: string) { }
}

export type Actions = StartTheGame |
  SelectMode;
