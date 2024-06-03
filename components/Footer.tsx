import moment from 'moment';
import type { FC } from 'react';

interface FooterProps {
  year?: string;
}

export const Footer: FC<FooterProps> = ({ year = moment().format('YYYY') }) => (
  <div className="mt-auto p-4 flex items-center justify-center">
    <p>
      {`Copyrights © 2017 - ${year}  `}
      <a
        className="text-[#666] ml-2 underline hover:text-gray-300"
        target="_blank"
        rel="noreferrer noopener"
        href="https://thecodedestroyer.com"
      >
        TheCodeDestroyer
      </a>
    </p>
  </div>
);
