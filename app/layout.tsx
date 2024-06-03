import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Is It Friday? | Find Out Now & Enjoy Daily Memes!',
  description:
    "Isitfriday.eu tells you whether it's Friday or not in a flash! For every other day, get a smile with a daily meme gif tailored to the day. Check now and start your day with a dose of fun!"
};

const RootLayout = async ({
  children
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
