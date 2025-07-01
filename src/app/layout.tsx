import type {Metadata} from 'next';
import './globals.css';
import { Poppins, PT_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartProvider';
import { Toaster } from '@/components/ui/toaster';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Lapzen – Premium Laptops in Pakistan',
    template: '%s | Lapzen',
  },
  description: 'Your one-stop shop for new, used, and refurbished premium laptops from top brands like Apple, Dell, HP, and more.',
  keywords: [
    'Lapzen',
    'premium laptops',
    'buy laptops in Pakistan',
    'used laptops',
    'refurbished laptops',
    'Next.js ecommerce',
    'Netlify store',
    'Apple laptops',
    'Dell laptops',
    'HP laptops',
  ],
  authors: [{ name: 'Lapzen Team' }],
  creator: 'Lapzen',
  metadataBase: new URL('https://lapzen.netlify.app'),
  openGraph: {
    title: 'Lapzen – Premium Laptops in Pakistan',
    description: 'Browse top-quality laptops from brands like Apple, Dell, HP. New and refurbished models available at unbeatable prices.',
    url: 'https://lapzen.netlify.app',
    siteName: 'Lapzen',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lapzen – Premium Laptops in Pakistan',
    description: 'Discover the best laptops in Pakistan with Lapzen. Fast. Reliable. Affordable.',
    creator: '@yourTwitterHandle', // replace with your brand’s Twitter handle or remove if not used
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-body antialiased", poppins.variable, ptSans.variable)}>
        <CartProvider>
            <div className="relative flex min-h-dvh flex-col bg-background">
                <Header />
                <main className="flex-1 pt-20">{children}</main>
                <Footer />
            </div>
            <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
