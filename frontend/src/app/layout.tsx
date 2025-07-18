import type { Metadata } from "next";
import { Geist, Roboto } from "next/font/google";
import vazirFont from "@constants/localFonts";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.variable} ${geistSans.variable} ${roboto.variable} font-sans min-h-screen`}
      >
        <div>header</div>
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
