import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "../components/home/Navbar/ResponsiveNavbar";
import Background from "../components/home/Backgound/bg";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rida || Fullstack Developer",
  description: "Portfolio of Rida - Fullstack Web Developer with Next.js, TypeScript, TailwindCSS and more...",
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional favicon and SEO meta tags */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4b5563" />
        <meta name="msapplication-TileColor" content="#4b5563" />
      </head>
      <body className={`${font.className} antialiased`}>
        <Background>
          <ResponsiveNavbar />
          {children}
        </Background>
      </body>
    </html>
  );
}