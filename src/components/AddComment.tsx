import { useState } from 'react';

import useAppDispatch from '../hooks/useAppDispatch';
import { postNewCommentAsync } from '../redux/post/thunks';

type commentProps = {
  idPost: number;
};

const AddComment = ({ idPost }: commentProps) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState('');
  return (
    <>
      <div className="flex justify-center px-4 gap-4">
        <input
          type="text"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              dispatch(postNewCommentAsync(comment, idPost));
              setComment('');
            }
          }}
          className="border border-gray-400 p-2 rounded-md w-full"
        ></input>
        <button
          onClick={() => {
            dispatch(postNewCommentAsync(comment, idPost));
            setComment('');
          }}
        >
          <div className="bg-gray-500 text-white font-bold h-10 rounded-md flex items-center px-4">Publier</div>
        </button>
      </div>
    </>
  );
};

export default AddComment;