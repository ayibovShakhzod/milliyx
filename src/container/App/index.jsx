import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useParams
  // useHistory
} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useTranslation } from 'react-i18next';

// import { changeLanguage } from '../../redux/modules/language/actions';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Nav from '../../components/Nav';
import SmoothScroll from '../SmoothScroll';

export default () => {
  // const dispatch = useDispatch();
  const { lang } = useParams();
  // const [lang, setLang] = useState();
  // const language = localStorage.getItem('language');
  // const { t, i18n } = useTranslation();
  // const hist+ory = useHistory();
  useEffect(() => {
    // if (!language) {
    //   dispatch(changeLanguage('ru'));
    // }
    // let value;
    // if (lang === 'ru' || lang === 'en' || lang === 'uz') {
    //   value = lang;
    // } else {
    //   value = localStorage.getItem('language');
    // }
    // console.log(lang);
    // dispatch(changeLanguage(value));
    // i18n.changeLanguage(value);
    // document.title = t('titleTop');
  }, []);

  return (
    <SmoothScroll>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={`/:${lang}/about`} component={About} />
        <Route path={`/:${lang}/category`} />
        <Route path={`/:${lang}/search`} />
        <Route path={`/:${lang}/news/:id`} />

        <Route path="*">
          <b>404</b>
          <p>Not found</p>
        </Route>
      </Switch>
    </SmoothScroll>
  );
};
