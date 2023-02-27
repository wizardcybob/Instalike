import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { PostAction, SET_POST } from './actions';
import { SetLikeFeedAction, SetUnlikeFeedAction, LIKE_POST_FEED, UNLIKE_POST_FEED } from '../feed/actions'

type PostState = {
  data?: Instalike.Post;
};

const intialState: PostState = {
  data: undefined,
};

const postReducer: Reducer<PostState, PostAction | SetLikeFeedAction | SetUnlikeFeedAction> = (state = intialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, data: action.payload };
    case LIKE_POST_FEED:
      if(state.data) {
        return {...state, data: {...state.data, viewerHasLiked: true, likesCount: state.data.likesCount + 1 } };
      }
      return state;
    case UNLIKE_POST_FEED:
      if(state.data) {
        return {...state, data: {...state.data, viewerHasLiked: false, likesCount: state.data.likesCount - 1 } };
      }
      return state;
    default:
      return state;
  }
};

export default postReducer;