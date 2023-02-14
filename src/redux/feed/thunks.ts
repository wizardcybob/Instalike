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

// Calcul temps de publication d'un post / commentaire
export const calculateTime = (createdAt: string): string => {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate.getTime() - createdDate.getTime());
  const diffMinutes = Math.floor(timeDiff / (1000 * 60)); //"Math.ceil" -> entier supérieur / "Math.floor" -> entier inférieur
  const diffHours = Math.floor(timeDiff / (1000 * 60 * 60));
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (diffMinutes < 60) {
    return diffMinutes === 1 ? `${diffMinutes} minute ago` : `${diffMinutes} minutes ago`;
  } else if (diffHours < 24) {
    return diffHours === 1 ? `${diffHours} hour ago` : `${diffHours} hours ago`;
  } else {
    return diffDays === 1 ? `${diffDays} day ago` : `${diffDays} days ago`;
  }
}

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
