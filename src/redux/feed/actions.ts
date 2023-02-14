import { Instalike } from '@jmetterrothan/instalike';
import { AppAction } from '../types';


export const SET_FEED = 'FEED/SET_USER_FEED';
export const LIKE_POST_FEED = 'FEED/LIKE_POST';
export const UNLIKE_POST_FEED = 'FEED/UNLIKE_POST';
export const DELETE_COMMENT_FEED = 'FEED/DELETE_COMMENT';


export type SetFeedUserAction = AppAction<typeof SET_FEED, Instalike.Post[]>;
export type SetLikeFeedAction = AppAction<typeof LIKE_POST_FEED>;
export type SetUnlikeFeedAction = AppAction<typeof UNLIKE_POST_FEED>;
export type DeleteCommentFeedAction = AppAction<typeof DELETE_COMMENT_FEED>;


export type FeedAction = SetFeedUserAction| SetUnlikeFeedAction | SetLikeFeedAction | SetLikeFeedAction | DeleteCommentFeedAction;



export const setUserFeed = (data: Instalike.Post[]): SetFeedUserAction => ({
  type: SET_FEED,
  payload: data,
});

export const likePostFeedAction = (data: number): SetLikeFeedAction => ({
  type: LIKE_POST_FEED,
  payload: data,
});

export const unlikePostFeedAction = (data: number): SetUnlikeFeedAction => ({
  type: UNLIKE_POST_FEED,
  payload: data,
});

export const deleteCommentFeedAction = (id: number): DeleteCommentFeedAction => ({
  type: DELETE_COMMENT_FEED,
  payload: id,
});
