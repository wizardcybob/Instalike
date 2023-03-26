import { Instalike } from '@jmetterrothan/instalike';
import { AppAction } from '../types';


export const SET_POST = 'POST/SET_POST';
export const REQUEST_POST_START = 'POST/REQUEST_FEED_START';
export const REQUEST_POST_SUCCESS = 'POST/REQUEST_FEED_SUCCESS';
export const REQUEST_POST_FAILURE = 'POST/REQUEST_FEED_FAILURE';
export const UNFOLLOW_USER_POST = 'POST/UNFOLLOW_USER_POST';
export const FOLLOW_USER_POST = 'POST/FOLLOW_USER_POST';
export const DELETE_POST = 'POST/DELETE_POST';
export const COMMENT_POST = 'POST/COMMENT_POST';


export type setPostAction = AppAction<typeof SET_POST, Instalike.Post>;
export type LoadPostStartAction = AppAction<typeof REQUEST_POST_START>;
export type LoadPostEndSucessAction = AppAction<typeof REQUEST_POST_SUCCESS>;
export type LoadPostEndFailureAction = AppAction<typeof REQUEST_POST_FAILURE>;
export type unfollowUserPostAction = AppAction<typeof UNFOLLOW_USER_POST>;
export type followUserPostAction = AppAction<typeof FOLLOW_USER_POST>;
export type deletePostAction = AppAction<typeof DELETE_POST>;
export type commentPostAction = AppAction<typeof COMMENT_POST>;



export type PostAction = setPostAction | LoadPostStartAction | LoadPostEndSucessAction | LoadPostEndFailureAction | followUserPostAction | unfollowUserPostAction | deletePostAction | commentPostAction;


export const setPost = (data: Instalike.Post): setPostAction => ({
  type: SET_POST,
  payload: data,
});

export const loadPostAction = (): LoadPostStartAction => ({
  type: REQUEST_POST_START,
  payload: undefined,
});

export const sucessPostAction = (): LoadPostEndSucessAction => ({
  type: REQUEST_POST_SUCCESS,
  payload: undefined,
});

export const failurePostAction = (): LoadPostEndFailureAction => ({
  type: REQUEST_POST_FAILURE,
  payload: undefined,
});

export const unfollowUserPostAction = (): unfollowUserPostAction => ({
  type: UNFOLLOW_USER_POST,
  payload: undefined,
});

export const followUserPostAction = (): followUserPostAction => ({
  type: FOLLOW_USER_POST,
  payload: undefined,
});

export const deletePostAction = (): deletePostAction => ({
  type: DELETE_POST,
  payload: undefined,
});

export const postCommentAction = (data: Instalike.Comment): commentPostAction => ({
  type: COMMENT_POST,
  payload: data,
});
