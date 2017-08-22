import * as GameActions from './game.actions';
import { GameCard, GameSettings } from './game.models';
import { CardsGenerator } from './game.class';

export interface State {
  initialized: boolean;
  gameSettings: GameSettings;
  cards: GameCard[];
  selectedCards: GameCard[];
}

const initialState: State = {
  initialized: false,
  gameSettings: null,
  cards: [],
  selectedCards: []
};

export function reducer(state: State = initialState, action: GameActions.Actions) {
  switch (action.type) {
    case GameActions.INITIALIZE_GAME: {
      // Init a new game
      const gameSettings = action.payload;
      const cardsGenerator = new CardsGenerator(gameSettings.cards);

      return {
        initialized: true,
        gameSettings: gameSettings
      };
    }

    default: {
      return state;
    }
  }
}
