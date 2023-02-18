import { selectPost } from '../redux/post/selectors';
import useAppSelector from './useAppSelector';

const usePost = () => {
  const items = useAppSelector(selectPost);

  return { items };
};

export default usePost;
