import './App.css';
import {useEffect} from "react";
import InstalikeApi from "./instalikeApi";
import instalikeApi from "./instalikeApi";
import './i18n'
import {useTranslation} from "react-i18next";

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
    </div>
  );
}

export default App
