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
    'laptops in lahore',
    'Apple laptops',
    'Dell laptops',
    'HP laptops',
    'Lenovo laptops',
    'Best laptops',
    'cheap laptops',
    'good condition laptops',
    'hafeez centre lahore',
    'hafeez centre laptops',
    'hafeez centre used laptops',
    'best laptops in lahore',
    'best used laptops in lahore',
    'lenovo used laptops',
    'dell used laptops',
    'good condition hp laptops',
    'good condition dell laptops',
    'good condition lenovo laptops',
    'hp used laptops',
    'best cheap laptops in lahore',
    'lapzen laptops',
    'lapzen used laptops',
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
  other:{
    'google-adsense-account':'ca-pub-5691028422781835'
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
