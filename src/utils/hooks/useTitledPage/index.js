// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

import { useEffect } from 'react';
import { useIntl } from 'react-intl';

export const useTitledPage = (title, props,) => {
  const intl = useIntl();
  const { formatMessage } = intl;

  useEffect(() => {
    const defaultTitle = formatMessage({id: 'app.page.title'});

    if (document) {
      let calculatedTitle;
      if (title && typeof title === 'string') {
        calculatedTitle = `${formatMessage({id: title})} | ${defaultTitle}`;
      } else if (title && typeof title === 'function' && title(props)) {
        // Only add to support page props-based loading
        calculatedTitle = `${formatMessage({id: title(props)})} | ${defaultTitle}`;
      } else {
        calculatedTitle = formatMessage({id: defaultTitle});
      }
      document.title = calculatedTitle;
    }
  }, [props, title, intl, formatMessage]);
};
