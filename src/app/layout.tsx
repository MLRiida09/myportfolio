import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/home/Navbar/ResponsiveNavbar";


const font=Inter(
  {
    weight :['100' ,'200'  ,'300'  ,'400' ,'500' ,'600' ,'700' ,'800' ,'900'],
    subsets:["latin"],

  }
)

export const metadata: Metadata = {
  title: "My Portfolio | Next.js",
  description: "Web Developer with Nextjs typescript tailwindcss ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}  antialiased bg-[#0D0D1F]`}>
      <ResponsiveNavbar />
        {children}
      </body>
    </html>
  );
}
