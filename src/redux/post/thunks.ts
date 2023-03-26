import { Instalike } from '@jmetterrothan/instalike';
import { data } from 'autoprefixer';

// AUTRES FICHIERS
import { AppThunkAction } from '../types';
import { failurePostAction, loadPostAction, setPost, sucessPostAction, followUserPostAction, unfollowUserPostAction, postCommentAction } from './actions';


// Calcul temps de publication d'un post / commentaire
export const calculateTime = (createdAt: string): string => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - createdDate.getTime());
    const diffSeconds = Math.floor(timeDiff / 1000); // ajout des secondes
    const diffMinutes = Math.floor(timeDiff / (1000 * 60));
    const diffHours = Math.floor(timeDiff / (1000 * 60 * 60));
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
    if (diffSeconds < 60) {
      return diffSeconds === 1 ? `${diffSeconds} seconde ago` : `${diffSeconds} secondes ago`;
    } else if (diffMinutes < 60) {
      return diffMinutes === 1 ? `${diffMinutes} minute ago` : `${diffMinutes} minutes ago`;
    } else if (diffHours < 24) {
      return diffHours === 1 ? `${diffHours} heure ago` : `${diffHours} hours ago`;
    } else {
      return diffDays === 1 ? `${diffDays} day ago` : `${diffDays} days ago`;
    }
}


// Réccupérer les posts
export const fetchPost = (postid: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    dispatch(loadPostAction());

    try {
      const { data } = await api.posts.find(postid).fetch();
      dispatch(setPost(data));

      dispatch(sucessPostAction());
    } catch (eee) {
      dispatch(failurePostAction());

      throw eee;
    }
  };
};


// Ajouter un post
export const addPost = (resources: File[], location: string, caption: string, hasCommentsDisabled: boolean): AppThunkAction<Promise<void>> => { //ajouter les autres éléments (accessibilityCaption, hasCommentsDisabled) ?
  return async (dispatch, getState, api) => {
    try { //laisser le try/catch wrapper sinon bug
      const { data } = await api.posts.create({
        resources: resources,
        location: location,
        caption: caption,
        hasCommentsDisabled: hasCommentsDisabled,
      });
      dispatch(setPost(data));
    } catch (fff) {
      throw fff;
    }
  };
};

// Follow someone
export const followUserPostAsync = (userId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.users.me.followers.follow(userId);
      dispatch(followUserPostAction());
    } catch (e) {
      throw e;
    }
  };
};

// Unfollow someone
export const unfollowUserPostAsync = (userId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.users.me.followers.unfollow(userId);
      dispatch(unfollowUserPostAction());
    } catch (e) {
      throw e;
    }
  };
};

// Delete post
export const deletePostAsync = (postId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      await api.posts.find(postId).delete();
      dispatch(deletePostAction());
    } catch (e) {
      throw e;
    }
  };
};

// Add comment
export const postNewCommentAsync = (comment: string, postId: number): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      const { data } = await api.posts.find(postId).comments.create({ text: comment, mentions: [] });
      dispatch(postCommentAction(data));
      //dispatch(addOneCounterCommentAction());
    } catch (e) {
      throw e;
    }
  };
};