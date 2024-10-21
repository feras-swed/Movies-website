import localFont from "next/font/local";
import "../globals.css";
import Headr from "@/components/Headr";
import { ThemeProvider } from 'next-themes';
import {Providers} from "./providers";
import { getDictionary } from './dictionaries'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SWED Movies website",
  description: "SWED Movies website",
};


export default async function RootLayout({ children,params }) {
  const { lang } = await params
  const dict =  await getDictionary(lang)

  return (
    <html lang={lang} className='dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        text-zinc-950 dark:text-gray-200 bg-background-light dark:bg-background-dark min-h-screen select-none transition-colors duration-300`}
        >
      <ThemeProvider attribute="class" defaultTheme="system"> 
      <Providers>
       <Headr lang={lang}/>
        {children}
        </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}       

// const locales = ['en', 'ar']; // تعريف locales هنا
// export function generateStaticParams() {
//   return locales.map(locale => ({ lang: locale }));
// }