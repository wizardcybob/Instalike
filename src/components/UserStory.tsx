// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const UserStory = () => {
return <>
    {/* USER / STORY */}
    <div className="flex flex-col items-center">
        <div className="relative">
            <div className="rounded-full overflow-hidden w-24 h-24">
                <img src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                    alt="" />
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