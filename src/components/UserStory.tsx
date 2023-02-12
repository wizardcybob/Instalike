// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const UserStory = () => {
return <>
    {/* USER / STORY */}
    <div className="flex flex-col items-center">
        <div className="relative">
            <div className="rounded-full overflow-hidden w-24 h-24">
                <img src="/src/assets/images/pp_user.png" alt="" />
            </div>
            <button
                className="px-2 py-[7px] text-2xl rounded-full bg-gray-300/50 flex items-center justify-center absolute right-0 bottom-0">
                <FontAwesomeIcon className="text-[14px]" icon={faPlus} />
            </button>
        </div>
        <p className="mt-2">Chloé</p>
    </div>
</>;
};

export default UserStory;