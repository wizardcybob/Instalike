import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';

// COMPOSANTS
import Post from '../components/Post';
import Navbar from '../components/Navbar';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import usePost from '../hooks/usePostItems';
import { fetchPost, calculateTime } from '../redux/post/thunks';


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
    <div className="h-full">
      {/* HEADER */}
      <Navbar />
      <div className="max-w-[640px] mx-auto py-10 md:py-16 px-4">
        {/* A POST */}
        {post && (
              <Post post={post} key={post.id}
              postid={post.id}
              username={post.owner.userName}
              location={post.location}
              time_post={calculateTime(post.createdAt)}
              caption={post.caption}
              isLiked={post.viewerHasLiked}
              likes={post.likesCount}
              comments={post.commentsCount}
              comment_post={post.previewComments}
              inFeed={false}
              comment_able={post.hasCommentsDisabled}
            ></Post>
            )}
        </div>
      </div>
  </>;
};

export default PostView;