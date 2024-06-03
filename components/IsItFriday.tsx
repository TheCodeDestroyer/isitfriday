import type { FC } from 'react';

interface IsItFridayProps {
  friday?: boolean;
  weekday: string;
}

export const IsItFriday: FC<IsItFridayProps> = ({
  friday = false,
  weekday
}) => (
  <div>
    <h1 className="text-4xl my-6">{friday ? 'Yes!' : 'No'}</h1>
    {!friday && <h2 className="text-3xl my-5">{`It's ${weekday}...`}</h2>}
  </div>
);
