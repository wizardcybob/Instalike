import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { FeedAction, SET_FEED, LIKE_POST_FEED, UNLIKE_POST_FEED } from './actions';

type FeedState = {
  items: Instalike.Post[];
};

const initalState: FeedState = {
  items: [],
};

const feedReducer: Reducer<FeedState, FeedAction> = (state = initalState, action) => {
  switch (action.type) {
    case SET_FEED:
      return {
        ...state,
        items: action.payload,
      };
    case LIKE_POST_FEED:
      return {
        ...state,
        items: state.items.map((post) => {
          if (post.id == action.payload) {
            return { ...post, viewerHasLiked: true, likesCount: post.likesCount + 1 };
          }
          return post;
        }),
      };

    case UNLIKE_POST_FEED:
      return {
        ...state,
        items: state.items.map((post) => {
          if (post.id == action.payload) {
            return { ...post, viewerHasLiked: false, likesCount: post.likesCount - 1 };
          }
          return post;
        }),
      };
  
    default:
      return state;
  }
};

export default feedReducer;
