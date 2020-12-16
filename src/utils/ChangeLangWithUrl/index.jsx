import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../redux/modules/language/actions';

export default () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const changeLanguagei18n = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    let value;
    if (lang === 'ru' || lang === 'en' || lang === 'uz') {
      value = lang;
    } else {
      value = localStorage.getItem('language');
    }
    dispatch(changeLanguage(value));
    changeLanguagei18n(value);
    history.push(`/${value}/`);
  }, []);
  return <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--primary-color)' }}>Wait</div>;
};
