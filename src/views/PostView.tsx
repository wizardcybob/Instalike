import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useAppDispatch from '../hooks/useAppDispatch';
import usePost from '../hooks/usePostItems';
import { fetchPost, calculateTime } from '../redux/post/thunks';
import Post from '../components/Post';


const usePostId = () => {
  const { id } = useParams();
  return id ? parseInt(id, 10) : -1;
};

const PostView = () => {
  const dispatch = useAppDispatch();
  const id = usePostId();
  useEffect(() => {
    dispatch(fetchPost(id));
  }, []);
  const post = usePost().items;

  if (id === -1) {
    return <Navigate to="feed" />;
  }

return <>
  <div className="bg-gray-900/50 h-full">
    <div className="max-w-[640px] mx-auto py-16 px-4">
      {/* A POST */}
      {post && (
            <Post key={post.id}
            postid={post.id}
            username={post.owner.userName}
            location={post.location}
            time_post={calculateTime(post.createdAt)}
            img={post.resources[0]}
            caption={post.caption}
            isLiked={post.viewerHasLiked}
            likes={post.likesCount}
            comments={post.commentsCount}
            comment_post={post.previewComments}
          ></Post>
          )}
      </div>
    </div>
</>;
};

export default PostView;