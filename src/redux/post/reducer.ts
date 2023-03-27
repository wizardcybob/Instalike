import { Instalike } from '@jmetterrothan/instalike';
import { Reducer } from 'redux';

import { PostAction, SET_POST, DELETE_POST, COMMENT_POST } from './actions';
import { SetLikeFeedAction, SetUnlikeFeedAction, LIKE_POST_FEED, UNLIKE_POST_FEED, UNFOLLOW_USER_FEED, FOLLOW_USER_FEED, unfollowUserFeedAction, followUserFeedAction } from '../feed/actions'

type PostState = {
  data: Instalike.Post;
};

const intialState: PostState = {
  data: {
    id: -1,
    caption: '',
    accessibilityCaption: '',
    location: '',
    resources: [],
    hasCommentsDisabled: false,
    likesCount: 0,
    previewLikes: [],
    commentsCount: 0,
    previewComments: [],
    viewerHasLiked: false,
    resourceType: 'Post',
    createdAt: '',
    owner: {
      resourceType: 'User',
      userName: '',
      firstName: '',
      lastName: '',
      id: -1,
      createdAt: '',
      fullName: '',
      avatar: '',
      email: '',
      biography: '',
      followersCount: -1,
      followingCount: -1,
      postsCount: -1,
      isFollowedByViewer: false,
      isViewer: false,
      updatedAt: '',
    },
  },
};

const postReducer: Reducer<PostState, PostAction | SetLikeFeedAction | SetUnlikeFeedAction | unfollowUserFeedAction | followUserFeedAction > = (state = intialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, data: action.payload };
    case LIKE_POST_FEED:
      if(state.data) {
        return {...state, data: {...state.data, viewerHasLiked: true, likesCount: state.data.likesCount + 1 } };
      }
      return state;
    case UNLIKE_POST_FEED:
      if(state.data) {
        return {...state, data: {...state.data, viewerHasLiked: false, likesCount: state.data.likesCount - 1 } };
      }
      return state;
    case UNFOLLOW_USER_FEED:
      if(state.data) {
        return { ...state, data: { ...state.data, owner: { ...state.data.owner, isFollowedByViewer: false } } };
      }
      return state;
    case FOLLOW_USER_FEED:
      if(state.data) {
        return { ...state, data: { ...state.data, owner: { ...state.data.owner, isFollowedByViewer: true } } };  
      }
      return state;
    case DELETE_POST:
      return { ...state, data: { ...state.data, id: -1 } };
    case COMMENT_POST:
      if (state.data) {
        return { ...state, previewComments: state.data.previewComments };
      }
      return state;  
    default:
      return state;
  }
};

export default postReducer;