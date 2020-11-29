import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../../redux/modules/language/actions';
import PushingHome from '../../utils/pushingHome';
import ChangeLanguageWithUrl from '../../utils/changeLanguageWithUrl';

export default () => {
  const dispatch = useDispatch();
  const [lang, setLang] = useState();
  const language = localStorage.getItem('language');

  useEffect(() => {
    if (!language) {
      dispatch(changeLanguage('uz'));
    }
     setLang(localStorage.getItem('language'));
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/" exact>
        <PushingHome />
      </Route>
      {language === lang ? (
        <Route path={`/:${lang}/`} exact>
          <Home />
        </Route>
      ) : (
        <Route path="/:lang/" exact>
          <ChangeLanguageWithUrl />
        </Route>
      )}
      <Route
        path={`/:${lang}/dashboard`}
        component={Dashboard}
      />
      <Route
        path={`/:${lang}/category`}
        component={Category}
      />
      <Route path={`/:${lang}/search`} component={Search} />
      <Route path={`/:${lang}/news/:id`} component={News} />
      <Route path="*" component={Category} />
    </Switch>
  );
};
