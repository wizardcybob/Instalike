import { Navigate, useParams } from 'react-router-dom';

const usePostId = () => {
  const { id } = useParams();
  return id ? parseInt(id, 10) : -1;
};

const PostView = () => {
  const id = usePostId();

  if (id === -1) {
    return <Navigate to=".." />;
  }

  return <>Post #{id}</>;
};

export default PostView;