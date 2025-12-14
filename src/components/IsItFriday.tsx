import type { FC } from 'react';

interface IsItFridayProps {
  friday?: boolean;
  weekday: string;
}

export const IsItFriday: FC<IsItFridayProps> = ({
  friday = false,
  weekday,
}) => (
  <div>
    <h1 className="my-6 text-4xl">{friday ? 'Yes!' : 'No'}</h1>
    {!friday && <h2 className="my-5 text-3xl">{`It's ${weekday}...`}</h2>}
  </div>
);
