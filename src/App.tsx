import './App.css';
import {useEffect} from "react";
import InstalikeApi from "./instalikeApi";
import instalikeApi from "./instalikeApi";
import './i18n'
import {useTranslation} from "react-i18next";
import Language from './assets/enums/Language';

function App() {
  //reduce
  useEffect(()=>{
    InstalikeApi.auth.login({email:"chloe.jacob4@etu.unistra.fr", password:'A25486*a'}).then(({data}) =>{
      console.log(data.accessToken)
      instalikeApi.posts.find(1).fetch;
    })
  })

  const { t,i18n } = useTranslation();

  return (
    <div className="App">
      <p>{t('actions.follow')}</p>

      <div className="flex gap-10">
          <button
            type="button"
            onClick={() => {
              i18n.changeLanguage(Language.EN);
            }}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => {
              i18n.changeLanguage(Language.FR);
            }}
          >
            Français
          </button>
        </div>
    </div>
  );
}

export default App
