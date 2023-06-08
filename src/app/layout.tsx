import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Schedule App",
  description: "By Zhuoda Liu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + " h-full flex flex-col"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
