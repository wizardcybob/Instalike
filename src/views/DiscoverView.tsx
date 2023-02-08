// COMPOSANTS
import Navbar from '../components/Navbar';
import DiscoverPost from '../components/DiscoverPost';


const DiscoverView = () => {

return <>
    {/* HEADER */}
    <Navbar />
    {/* ALL DISCOVER POSTS */}
    <div className="max-w-[995px] mx-auto mt-8 mb-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {/* A DISCOVER POST */}
      <DiscoverPost />
      {/* A DISCOVER POST */}
      <DiscoverPost />
      {/* A DISCOVER POST */}
      <DiscoverPost />
      {/* A DISCOVER POST */}
      <DiscoverPost />
    </div>
  </>;
};

export default DiscoverView;