import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = (props) => {
  const { i18n } = useTranslation();

  return (
    <div className="select">
      <select
        aria-label="Select language"
        id="language"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="ar">عربي</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
