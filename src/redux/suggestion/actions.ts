import { Instalike } from '@jmetterrothan/instalike';
import { AppAction } from '../types';


export const SET_SUGGESTION_FEED = 'USERSTORY/SET_FEED';


export type getSuggestionFeedAction = AppAction<typeof SET_SUGGESTION_FEED, Instalike.User[]>;


export type SuggestionAction = getSuggestionFeedAction;


export const setSuggestionAction = (data: Instalike.User[]): getSuggestionFeedAction => ({
  type: SET_SUGGESTION_FEED,
  payload: data,
});