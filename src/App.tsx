import { Navigate, Route, Routes } from 'react-router-dom';

import DiscoverView from './views/DiscoverView';
import FeedView from './views/FeedView';
import LoginView from './views/LoginView';
import PostView from './views/PostView';
import AddPostView from './views/AddPostView';
import Profile from './views/Profile';

import AuthGuard from './components/AuthGuard';
import useAuthInterceptors from './hooks/useAuthInterceptors';

import './i18n';


function App() {
  useAuthInterceptors();

  return (
    <Routes>
      <Route path="login" element={<LoginView />} />
      <Route element={<AuthGuard />}>
        <Route path="feed" element={<FeedView />} />
        <Route path="discover" element={<DiscoverView />} />
        <Route path="addpost" element={<AddPostView />} />
        <Route path="post/:id" element={<PostView />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="feed" />} />
    </Routes>
  );
}

export default App;
