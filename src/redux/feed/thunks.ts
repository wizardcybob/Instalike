import { Instalike } from '@jmetterrothan/instalike';
import { data } from 'autoprefixer';

// Autres fichiers
import type { AppThunkAction } from '../types';
import { setUserFeed, likePostFeedAction, unlikePostFeedAction, deleteCommentFeedAction } from './actions';


// Users pour le feed
export const fetchFeedUserAsync = (): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {

    const { data } = await api.users.me.feed.fetch({ cursor: null });
    dispatch(setUserFeed(data.items));

  };
};

// Like post
export const likepostAsync = (postId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
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
