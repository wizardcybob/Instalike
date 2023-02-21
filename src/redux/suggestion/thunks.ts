import { AppThunkAction } from '../types';
import { setSuggestionAction } from './actions';

export const fetchSuggestionAsync = (): AppThunkAction<Promise<void>> => {
  return async (dispatch, getState, api) => {
    try {
      const { data } = await api.users.me.followSuggestions.fetch({ amount: 5 });
      dispatch(setSuggestionAction(data));
    } catch (e) {

      throw e;
    }
  };
};
