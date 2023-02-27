import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { FeedAction, SET_FEED, LIKE_POST_FEED, UNLIKE_POST_FEED, DELETE_COMMENT_FEED, FOLLOW_USER_FEED, UNFOLLOW_USER_FEED } from './actions';

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

    case DELETE_COMMENT_FEED:
      return {
        ...state,
        items: state.items.map((post) => {
          return {
            ...post,
            previewComments: post.previewComments.map((comment, key) => {
              if (comment.id == action.payload) {
                return { ...comment, text: '' };
              }
              return comment;
            }),
          };
        }),
      };
      case UNFOLLOW_USER_FEED:
        return {
          ...state,
          items: state.items.map((post) => {
            if (post.id == action.payload) {
              return { ...post, owner: { ...post.owner, isFollowedByViewer: false } };
            }
            return post;
          }),
        };
  
      case FOLLOW_USER_FEED:
        return {
          ...state,
          items: state.items.map((post) => {
            if (post.id == action.payload) {
              return { ...post, owner: { ...post.owner, isFollowedByViewer: true } };
            }
            return post;
          }),
        };  
    default:
      return state;
  }
};

export default feedReducer;
