import { Instalike } from '@jmetterrothan/instalike';
import { AppAction } from '../types';


export const SET_FEED = 'FEED/SET_USER_FEED';
export const LIKE_POST_FEED = 'FEED/LIKE_POST';
export const UNLIKE_POST_FEED = 'FEED/UNLIKE_POST';
export const DELETE_COMMENT_FEED = 'FEED/DELETE_COMMENT';
export const UNFOLLOW_USER_FEED = 'FEED/UNFOLLOW_USER_FEED';
export const FOLLOW_USER_FEED = 'FEED/FOLLOW_USER_FEED';



export type SetFeedUserAction = AppAction<typeof SET_FEED, Instalike.Post[]>;
export type SetLikeFeedAction = AppAction<typeof LIKE_POST_FEED>;
export type SetUnlikeFeedAction = AppAction<typeof UNLIKE_POST_FEED>;
export type DeleteCommentFeedAction = AppAction<typeof DELETE_COMMENT_FEED>;
export type unfollowUserFeedAction = AppAction<typeof UNFOLLOW_USER_FEED>;
export type followUserFeedAction = AppAction<typeof FOLLOW_USER_FEED>;


export type FeedAction = SetFeedUserAction| SetUnlikeFeedAction | SetLikeFeedAction | SetLikeFeedAction | DeleteCommentFeedAction | SetLikeFeedAction | unfollowUserFeedAction | followUserFeedAction;



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

export const unfollowUserFeedAction = (data: number): unfollowUserFeedAction => ({
  type: UNFOLLOW_USER_FEED,
  payload: data,
});

export const followUserFeedAction = (data: number): followUserFeedAction => ({
  type: FOLLOW_USER_FEED,
  payload: data,
});
