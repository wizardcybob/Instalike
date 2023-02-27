import { Instalike } from '@jmetterrothan/instalike';
import { AppThunkAction } from '../types';
import { setSuggestionAction, followUserSuggestionAction, unfollowUserSuggestionAction } from './actions';

export const fetchSuggestionAsync = (): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    const { data } = await api.users.me.followSuggestions.fetch({ amount: 5 });
    dispatch(setSuggestionAction(data));
  };
};

export const followUserSuggestionAsync = (user: Instalike.User): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    await api.users.me.followers.follow(user.id);
    dispatch(followUserSuggestionAction(user));
  };
};

export const unfollowUserSuggestionAsync = (user: Instalike.User): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    await api.users.me.followers.unfollow(user.id);
    dispatch(unfollowUserSuggestionAction(user));
  };
};
