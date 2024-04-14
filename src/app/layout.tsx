import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import NextTopLoader from 'nextjs-toploader';

import { ThemeProvider } from '@/providers/theme-provider';
import ModalProvider from '@/providers/modal-provider';
import { Toaster } from '@/components/ui/toaster';

const fontSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Fuzzie',
  description: 'All in one Agency Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <link rel="icon" href="/images/z-logo.png" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NextTopLoader
            color='blue'
            showSpinner={false}
          />
          <ModalProvider>
            <Toaster />
            {children}
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
