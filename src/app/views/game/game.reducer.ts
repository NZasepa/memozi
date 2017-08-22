import * as GameActions from './game.actions';

export interface State {
  initialized: boolean;
}

const initialState: State = {
  initialized: false
};

export function reducer(state: State = initialState, action: GameActions.Actions) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
