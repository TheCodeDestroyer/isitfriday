import type { FC } from 'react';

interface IsItFridayProps {
  friday?: boolean;
  weekday: string;
}

export const IsItFriday: FC<IsItFridayProps> = ({
  friday = false,
  weekday
}) => (
  <div className="iif-answer">
    <h1>{friday ? 'Yes!' : 'No'}</h1>
    {!friday && <h2>{`It's ${weekday}...`}</h2>}
  </div>
);
