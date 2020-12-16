import React from 'react';
import { useTranslation } from 'react-i18next';

export default () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t('titleTop')}</p>
    </div>
  );
};
