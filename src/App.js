import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import Price from './price';

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
    document.documentElement.lang = i18n.language;

    document.title = i18n.t('document_title');
  }, [i18n, i18n.language]);

  return (
    <h1 className="text-5xl  underline">
      <Price />
    </h1>
  );
}

export default App;
