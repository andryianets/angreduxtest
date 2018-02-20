import {Action, Reducer} from 'redux';

export interface IAppState {
  count: number;
}

export function rootReducer(state: IAppState, action: Action): IAppState {
  switch (action.type) {
    case 'inc':
      return {count: state.count + 1};
  }
  return state;
}
