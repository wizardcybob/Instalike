import { useEffect } from 'react';
import instalikeApi from '../instalikeApi';

// COMPOSANTS
import Navbar from '../components/Navbar';
import UserStory from '../components/UserStory';
import Post from '../components/Post';

const FeedView = () => {
    useEffect(() => {
        console.log('fetch');
        instalikeApi.posts.fetch({ cursor: null });
        instalikeApi.users.me.fetch();
        instalikeApi.users.find(1).fetch();
      }, []);
    
return <>
    {/* HEADER */}
    <Navbar />
    {/* FEED */}
    <div className="max-w-[640px] mx-auto mt-8 mb-16 px-4">
        {/* USERS / STORIES */}
        <ul className="flex gap-8">
            {/* USER / STORY */}
            <li>
                <UserStory />
            </li>
            <li>
                <UserStory />
            </li>
            <li>
                <UserStory />
            </li>
        </ul>
        {/* POSTS */}
        <Post />
        <Post />
    </div>
</>;
};

export default FeedView;