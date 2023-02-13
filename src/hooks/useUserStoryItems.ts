import { selectFeedItems } from '../redux/feed/selectors'; //ici
import useAppSelector from './useAppSelector';

const useUserStoryItems = () => {
  return useAppSelector(selectFeedItems);
};

export default useUserStoryItems;