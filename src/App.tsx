import { Navigate, Route, Routes } from 'react-router-dom';

import DiscoverView from './views/DiscoverView';
import FeedView from './views/FeedView';
import LoginView from './views/LoginView';
import PostView from './views/PostView';

import AuthGuard from './components/AuthGuard';
import useAuthInterceptors from './hooks/useAuthInterceptors';

import './i18n';


function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginView />} />
        {/* <Route element={<AuthGuard />}> */}
          <Route path="feed" element={<FeedView />} />
          <Route path="discover" element={<DiscoverView />} />
          <Route path="post/:id" element={<PostView />} />
        {/* </Route> */}
        <Route path="*" element={<Navigate to="discover" />} />
      </Routes>
    </>
  );
}

export default App;
