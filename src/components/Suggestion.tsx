import { Instalike } from '@jmetterrothan/instalike';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

// AUTRES FICHIERS
import useAppDispatch from '../hooks/useAppDispatch';
import { followUserSuggestionAsync, unfollowUserSuggestionAsync } from '../redux/suggestion/thunks';



type SuggestionProps = {
    user: Instalike.User;
};

const Suggestion = ({ user }: SuggestionProps) => {
    const dispatch = useAppDispatch();


return <>
    {/* USER / STORY */}
    <li className="flex flex-col items-center">
        <div className="relative">
            <div className="bg-gray-400 flex items-center justify-center rounded-full overflow-hidden w-24 h-24">
                {/* <img src="/src/assets/images/pp_user.png" alt="" /> */}
                <p className="uppercase text-white text-[38px]">{user.firstName.charAt(0)}</p>
            </div>
            {user.isFollowedByViewer ? (
            <button className="px-2 py-[7px] text-2xl rounded-full bg-blue-200 flex items-center justify-center absolute right-0 bottom-0" onClick={() => {
                dispatch(unfollowUserSuggestionAsync(user));
              }}
            >
                <FontAwesomeIcon className="text-[14px]" icon={faCheck} />
            </button>
            ) : (
            <button className="px-2 py-[7px] text-2xl rounded-full bg-gray-300/50 flex items-center justify-center absolute right-0 bottom-0" onClick={() => {
                dispatch(followUserSuggestionAsync(user));
              }}
            >
                <FontAwesomeIcon className="text-[14px]" icon={faPlus} />
            </button>
            )}
        </div>
        <p className="mt-2">{user.firstName}</p>
    </li>
</>;
};

export default Suggestion; // suggestion = userstory