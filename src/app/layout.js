import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/common/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rachit",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen flex justify-center overflow-x-hidden">
        <div className="w-[95%]">
          <Header />
          <main className={`${inter.className} w-full`}>{children}</main>
        </div>
      </body>
    </html>
  );
}
