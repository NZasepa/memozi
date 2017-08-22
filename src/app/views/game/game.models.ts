import { standardDeck } from './decks/standard';

export interface GameSettings {
  cards: number;
  toUnravel: number;
  timerSeconds: number | null;
}

export interface CardType {
  name: string;
  image: string;
}

export interface GameCard {
  type: CardType;
  isUnrevealed: boolean;
}

export interface GameMode {
  easy: GameSettings;
  medium: GameSettings;
  hard: GameSettings;
}

const GAME_EASY_PRESET: GameSettings = {
  cards: 10 * 10,
  toUnravel: 2,
  timerSeconds: null
};

const GAME_MEDIUM_PRESET: GameSettings = {
  cards: 15 * 15,
  toUnravel: 3,
  timerSeconds: null
};

const GAME_HARD_PRESET: GameSettings = {
  cards: 20 * 20,
  toUnravel: 4,
  timerSeconds: 60 * 4 // 4 minutes
};

export const gameMode: GameMode = {
  easy: GAME_EASY_PRESET,
  medium: GAME_MEDIUM_PRESET,
  hard: GAME_HARD_PRESET
};

export const cardDecks: { [key: string]: CardType[] } = {
  standard: standardDeck
};
