import { Actions } from './start.actions';

export interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false
};

export function reducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
