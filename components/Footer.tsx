import moment from 'moment';
import type { FC } from 'react';

const style = { color: '#666' };

interface FooterProps {
  year?: string;
}

export const Footer: FC<FooterProps> = ({ year = moment().format('YYYY') }) => (
  <div className="iif-footer">
    <p>
      {`Copyrights © 2017 - ${year}  `}
      <a
        style={style}
        target="_blank"
        rel="noreferrer noopener"
        href="https://thecodedestroyer.com"
      >
        TheCodeDestroyer
      </a>
    </p>
  </div>
);
