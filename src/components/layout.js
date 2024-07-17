import { Playfair_Display, Roboto } from "next/font/google";
import "../app/globals.css";
import Head from 'next/head'
import Nav from "./nav";
import Footer from "./footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto", weight: ["100", "300", "400", "500", "700", "900"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${roboto.variable}`}>
      <Head>
        <title>Opulence Motors</title>
      </Head>
      <body class="font-sans bg-gradient-to-br from-black from-50% to-[#0a0a0a]">
        <Nav />
        <main class="text-white mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
