import { Navigate, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

const usePostId = () => {
const { id } = useParams();
return id ? parseInt(id, 10) : -1;
};

const PostView = () => {
const id = usePostId();

if (id === -1) {
return
<Navigate to=".." />;
}

return <>
  <div className="bg-gray-900/50 h-full">
    <div className="max-w-[640px] mx-auto py-16 px-4">
      {/* A POST */}
      Post #{id}
      <div className="rounded-xl overflow-hidden shadow-post shadow-gray-900 border-none bg-white">
        {/* HEADER POST */}
        <div className="flex justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden w-12 h-12">
              <img
                src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                alt="" />
            </div>
            <div>
              <p className="font-bold">j.metterrothan</p>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon className="text-[14px]" icon={faLocationDot} />
                <p className="text-sm mt-[2px]">Italy, 13 days ago</p>
              </div>
            </div>
          </div>
          <div className="w-10 flex justify-center items-center">
            <FontAwesomeIcon className="text-[22px]" icon={faEllipsisVertical} />
          </div>
        </div>
        {/* IMAGE POST */}
        <div className="flex justify-center items-center">
          <img
            src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
            alt="" />
        </div>
        {/* BIO POST */}
        <div className="p-4">
          <p className="text-red-500">Quo praesentium facilis voluptatibus consequatur.</p>
          <div className="flex mt-3 gap-2">
            <button type="button" className="px-4 py-1 bg-slate-400 rounded-full flex items-center gap-2">
              <FontAwesomeIcon className="text-[20px]" icon={faHeart} />
              <span className="mt-1">0</span>
            </button>
            <button type="button" className="px-4 flex items-center gap-2">
              <FontAwesomeIcon className="text-[20px]" icon={faCommentDots} />
              <span className="mt-1">0</span>
            </button>
          </div>
        </div>
        {/* WRITE A COMMENT POST */}
        <div className="p-4 border-t-[0.8px]">
          <form action="" className="flex gap-4">
            <div>
              <div className="rounded-full overflow-hidden w-12 h-12">
                <img
                  src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                  alt="" />
              </div>
            </div>
            <input className="w-full" placeholder="Add a comment..."></input>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon className="text-[24px]" icon={faFaceSmile} />
              <button type="button" className="px-4 pt-[8px] pb-[6px] bg-slate-400 rounded-md font-bold capitalize">send</button>
            </div>
          </form>
        </div>
        {/* COMMENTS POST -> à cacher s'il y en a pas */}
        <div className="flex justify-between p-4 border-t-[0.8px]">
          <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden w-8 h-8">
              <img
                src="https://cdn4.vectorstock.com/i/1000x1000/82/53/white-letter-a-logo-on-red-background-vector-26888253.jpg"
                alt="" />
            </div>
            <div>
              <p><span className="font-bold mr-1">j.metterrothan</span>test</p>
              <p className="text-sm">7 days ago</p>
            </div>
          </div>
          <div className="w-10 flex justify-center items-center">
            <FontAwesomeIcon className="text-[28px]" icon={faEllipsisVertical} />
          </div>
        </div>
      </div>
    </div>
  </div>
</>;
};

export default PostView;