import { dark } from '@clerk/themes';
import { ClerkProvider } from '@clerk/nextjs';

import Navbar from '@/components/global/navbar';

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className="flex h-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar />
        {children}
      </main>
    </ClerkProvider>
  );
}

export default SiteLayout;
