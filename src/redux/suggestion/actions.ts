import { Instalike } from '@jmetterrothan/instalike';
import { AppAction } from '../types';


export const SET_SUGGESTION_FEED = 'USERSTORY/SET_FEED';
export const FOLLOW_USER_SUGGESTION = 'USERSTORY/FOLLOW_USER';
export const UNFOLLOW_USER_SUGGESTION = 'USERSTORY/UNFOLLOW_USER';


export type getSuggestionFeedAction = AppAction<typeof SET_SUGGESTION_FEED, Instalike.User[]>;
export type followUserSuggestionAction = AppAction<typeof FOLLOW_USER_SUGGESTION, Instalike.User>;
export type unfollowUserSuggestionAction = AppAction<typeof UNFOLLOW_USER_SUGGESTION, Instalike.User>;


export type SuggestionAction = getSuggestionFeedAction | unfollowUserSuggestionAction | followUserSuggestionAction;


export const setSuggestionAction = (data: Instalike.User[]): getSuggestionFeedAction => ({
  type: SET_SUGGESTION_FEED,
  payload: data,
});

export const followUserSuggestionAction = (data: Instalike.User): followUserSuggestionAction => ({
  type: FOLLOW_USER_SUGGESTION,
  payload: data,
});

export const unfollowUserSuggestionAction = (data: Instalike.User): unfollowUserSuggestionAction => ({
  type: UNFOLLOW_USER_SUGGESTION,
  payload: data,
});
