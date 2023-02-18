import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { PostAction, SET_POST } from './actions';

type PostState = {
  data?: Instalike.Post;
};

const intialState: PostState = {
  data: undefined,
};

const postReducer: Reducer<PostState, PostAction> = (state = intialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default postReducer;