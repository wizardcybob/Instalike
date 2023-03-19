import { Instalike } from '@jmetterrothan/instalike';
import { data } from 'autoprefixer';

// AUTRES FICHIERS
import type { AppThunkAction } from '../types';
import { setUserFeed, likePostFeedAction, unlikePostFeedAction, deleteCommentFeedAction, followUserFeedAction, unfollowUserFeedAction } from './actions';


// User posts for feed
export const fetchFeedUserAsync = (): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    const { data } = await api.users.me.feed.fetch({ cursor: null, amount: 12 }); // chargement de 12 posts
    dispatch(setUserFeed(data.items));
  };
};

// Like post
export const likepostAsync = (postId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try { //laisser le try/catch wrapper sinon bug
      await api.posts.find(postId).like();
      dispatch(likePostFeedAction(postId));
    } catch (e) {
      throw e;
    }
  };
};

// Unlike post
export const unlikePostAsync = (postId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.posts.find(postId).unlike();
      dispatch(unlikePostFeedAction(postId));
    } catch (e) {
      throw e;
    }
  };
};

// Delete its own comment
export const deleteCommentFeedAsync = (postId: number, commentId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.posts.find(postId).comments.find(commentId).delete();
      dispatch(deleteCommentFeedAction(commentId));
    } catch (e) {
      throw e;
    }
  };
};

// Follow someone
export const followUserFeedAsync = (postId: number, userId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    await api.users.me.followers.follow(userId);
    dispatch(followUserFeedAction(postId));
  };
};

// Unfollow someone
export const unfollowUserFeedAsync = (postId: number, userId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    await api.users.me.followers.unfollow(userId);
    dispatch(unfollowUserFeedAction(postId));
  };
};

// User posts for discover
export const fetchDiscoverAsync = (): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    const { data } = await api.posts.fetch({ cursor: null, amount: 20 });
    dispatch(setUserFeed(data.items));
  }
};

// Own posts for profile
export const fetchProfileAsync = (): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    const { data } = await api.users.me.posts.fetch({ cursor: null, amount: 20 });
    dispatch(setUserFeed(data.items));
  }
};