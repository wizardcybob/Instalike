// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';


type CommentProps = {
    user_comment: string;
    text_comment: string;
    time_comment: number;
};


const Comment = ({ user_comment, text_comment, time_comment }: CommentProps) => {

return <>
{/* A COMMENT */}
    <div className="flex justify-between p-4 border-t-[0.8px]">
        <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden w-8 h-8">
                <img src="/src/assets/images/pp_user.png" alt="" />
            </div>
            <div>
                <p><span className="font-bold mr-1">{user_comment}</span>{text_comment}</p>
                <p className="text-sm">{time_comment} days ago</p>
            </div>
        </div>
        <div className="w-10 flex justify-center items-center">
            <FontAwesomeIcon className="text-[28px]" icon={faEllipsisVertical} />
        </div>
    </div>
</>;
};

export default Comment;