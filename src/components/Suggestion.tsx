// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type SuggestionProps = {
    firstname: string;
};

const Suggestion = ({ firstname }: SuggestionProps) => {

return <>
    {/* USER / STORY */}
    <li className="flex flex-col items-center">
        <div className="relative">
            <div className="bg-gray-400 flex items-center justify-center rounded-full overflow-hidden w-24 h-24">
                {/* <img src="/src/assets/images/pp_user.png" alt="" /> */}
                <p className="uppercase text-white text-[38px]">{firstname.charAt(0)}</p>
            </div>
            <button
                className="px-2 py-[7px] text-2xl rounded-full bg-gray-300/50 flex items-center justify-center absolute right-0 bottom-0">
                <FontAwesomeIcon className="text-[14px]" icon={faPlus} />
            </button>
        </div>
        <p className="mt-2">{firstname}</p>
    </li>
</>;
};

export default Suggestion; // suggestion = userstory