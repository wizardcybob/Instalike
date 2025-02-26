import { Instalike } from '@jmetterrothan/instalike';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { /* faEllipsisVertical, */ faTrash } from '@fortawesome/free-solid-svg-icons';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import { deleteCommentFeedAsync } from '../redux/feed/thunks';
import { calculateTime } from '../redux/post/thunks';

type CommentProps = {
    tab_comments: Instalike.Comment[];
};

const Comment = ({ tab_comments }: CommentProps) => {
    const limitCommentText = (commentText: string) => { // limite les pavés sous le post
        if (commentText.length >= 50) {
            return commentText.slice(0, 50) + '...';
        }
        return commentText;
    };

    const displayComment = (comment: Instalike.Comment) => {
        return (
            <div className="flex justify-between">
                <div className="flex items-start gap-4">
                    <div>
                        <div className="bg-gray-400 flex items-center justify-center rounded-full overflow-hidden w-8 h-8 mt-[5px]">
                            <p className="uppercase text-white text-xs">{comment.owner.userName.charAt(0)}</p>
                        </div>
                    </div>
                    <div>
                        {/* <p><span className="font-bold mr-1">{comment.owner.userName}</span>{limitCommentText(comment.text)}</p> */}
                        <p><span className="font-bold mr-1">{comment.owner.userName}</span>{comment.text}</p>
                        <p className="text-sm">{calculateTime(comment.createdAt)}</p>
                    </div>
                </div>
                {comment.owner.isViewer && (
                <button className="w-10 flex justify-center items-center" onClick={()=> {
                    dispatch(deleteCommentFeedAsync(comment.postId, comment.id));
                    }}
                >
                    {/* <FontAwesomeIcon className="text-[28px]" icon={faEllipsisVertical} /> */}
                    <FontAwesomeIcon className="text-[14px]" icon={faTrash} />
                </button>
                )}
            </div>
        );
    };

    const dispatch = useAppDispatch();
    return (
        <>
            {tab_comments.map((comment) => {
                {
                    if (comment.text !== '') {
                        return <div key={comment.id}>{displayComment(comment)}</div>;
                    }
                }
            })}
        </>
    );
};

export default Comment;