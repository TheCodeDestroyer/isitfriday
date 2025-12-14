import type { FC } from 'react';

import moment from 'moment';

interface FooterProps {
  year?: string;
}

export const Footer: FC<FooterProps> = ({ year = moment().format('YYYY') }) => (
  <div className="mt-auto flex items-center justify-center p-4">
    <p>
      {`Copyrights © 2017 - ${year}  `}
      <a
        className="ml-2 text-[#666] underline hover:text-gray-300"
        target="_blank"
        rel="noreferrer noopener"
        href="https://thecodedestroyer.com"
      >
        TheCodeDestroyer
      </a>
    </p>
  </div>
);
