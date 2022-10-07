import { applicationInfo } from '../../constants/applicationInfo';
import Icon from '../../assets/icons/icon.svg';

import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | ${applicationInfo.applicationName}` : undefined}
      defaultTitle={applicationInfo.applicationName}
    >
      <meta
        name="description"
        content={description}
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href={Icon}
      />
    </Helmet>
  );
};
