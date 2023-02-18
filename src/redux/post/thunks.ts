import { Instalike } from '@jmetterrothan/instalike';
import { data } from 'autoprefixer';

import { AppThunkAction } from '../types';
import { failurePostAction, loadPostAction, setPost, sucessPostAction } from './actions';

export const fetchPostAsync = (postid: number): AppThunkAction<Promise<void>> => {
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
