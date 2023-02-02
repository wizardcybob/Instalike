// import './App.css';
// import {useEffect} from "react";
// import './i18n'
// import {useTranslation} from "react-i18next";
// import Language from './assets/enums/Language';
// import instalikeApi from './instalikeApi';

// function App() {
//   //reduce
//   useEffect(()=>{
//     instalikeApi.auth.login({email:"chloe.jacob4@etu.unistra.fr", password:'A25486*a'}).then(({data}) =>{
//       console.log(data.accessToken)
//       instalikeApi.posts.find(1).fetch;
//     })
//   })

//   const { t,i18n } = useTranslation();

//   return (
//     <div className="App">
//       <p>{t('actions.follow')}</p>

//       <div className="flex gap-10">
//           <button
//             type="button"
//             onClick={() => {
//               i18n.changeLanguage(Language.EN);
//             }}
//           >
//             English
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               i18n.changeLanguage(Language.FR);
//             }}
//           >
//             Français
//           </button>
//         </div>
//     </div>
//   );
// }

// export default App

import { Link, Navigate, Route, Routes } from 'react-router-dom';

import './i18n';
import DiscoverView from './views/DiscoverView';
import FeedView from './views/FeedView';
import LoginView from './views/LoginView';
import PostView from './views/PostView';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="feed">Feed</Link>
        </li>
        <li>
          <Link to="discover">Discover</Link>
        </li>
        <li>
          <Link to="post/1">Post 1</Link>
        </li>
      </ul>
      <Routes>
        <Route path="login" element={<LoginView />} />
        <Route path="feed" element={<FeedView />} />
        <Route path="discover" element={<DiscoverView />} />
        <Route path="post/:id" element={<PostView />} />
        <Route path="*" element={<Navigate to="feed" />} />
      </Routes>
    </>
  );
}

export default App;
