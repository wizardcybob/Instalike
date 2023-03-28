import { useState } from 'react';

// LANGUAGE
import i18n from 'i18next';
import {useTranslation} from "react-i18next";
import Language from '../assets/enums/Language';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import { postNewCommentAsync } from '../redux/post/thunks';

type commentProps = {
  idPost: number;
};

const AddComment = ({ idPost }: commentProps) => {
  const { t,i18n } = useTranslation();
  const [isPickerVisible, setPickerVisible] = useState(false);
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState('');
  return (
    <>
      <div className="flex justify-center px-4 gap-4 pb-4">
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
          className="border border-gray-400 dark:bg-darkblue p-2 rounded-md w-full"
          placeholder="Add a comment"
        ></input>
        <button
          onClick={() => {
            dispatch(postNewCommentAsync(comment, idPost));
            setComment('');
            setTimeout(() => {
              window.location.reload();
            }, 700);
          }}
        >
          <div className="bg-gray-500 text-white font-bold h-10 rounded-md flex items-center px-4">{t('actions.publish')}</div>
        </button>
      </div>
    </>
  );
};

export default AddComment;