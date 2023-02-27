import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { FOLLOW_USER_SUGGESTION, SET_SUGGESTION_FEED, SuggestionAction, UNFOLLOW_USER_SUGGESTION } from './actions';


type SuggestionState = {
  data: Instalike.User[];
};


const initalState: SuggestionState = {
  data: [],
};

const suggestionReducer: Reducer<SuggestionState, SuggestionAction> = (state = initalState, action) => {
  switch (action.type) {
    case SET_SUGGESTION_FEED:
      return { ...state, data: action.payload };
    case FOLLOW_USER_SUGGESTION:
      return {
        ...state,
        data: state.data.map((user) => {
          if (user === action.payload) {
            return { ...user, isFollowedByViewer: true };
          }
          return user;
        }),
      };
    case UNFOLLOW_USER_SUGGESTION:
      return {
        ...state,
        data: state.data.map((user) => {
          if (user === action.payload) {
            return { ...user, isFollowedByViewer: false };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export default suggestionReducer;