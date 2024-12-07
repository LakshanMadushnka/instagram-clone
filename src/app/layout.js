import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import SessionWrapper from "./components/SessionWrapper";

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
  title: "Instagram",
  description: "A clone of instagram built with Next js",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
    </SessionWrapper>
    
  );
}
