import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { SET_SUGGESTION_FEED, SuggestionAction } from './actions';


type SuggestionState = {
  data: Instalike.User[];
};


const initalState: SuggestionState = {
  data: [],
};

const suggestionReducer: Reducer<SuggestionState, SuggestionAction> = (state = initalState, action) => {
  switch (action.type) {
    case SET_SUGGESTION_FEED:
      console.log(action.payload);
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default suggestionReducer;