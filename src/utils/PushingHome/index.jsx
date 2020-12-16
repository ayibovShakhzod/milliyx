import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default () => {
  const { i18n } = useTranslation();
  const lang = useSelector(({ languageReducer }) => languageReducer.language);
  const history = useHistory();
  useEffect(() => {
    history.push(`/${lang}/`);
    i18n.changeLanguage(lang);
  });
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--primary-color)' }}>Wait</div>
  );
};
