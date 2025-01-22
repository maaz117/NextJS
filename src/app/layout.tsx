import './globals.css'; 
import { Providers } from './provider';

export const metadata = {
  title: 'Todo List App',
  description: 'A simple Todo List using Redux Toolkit and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
