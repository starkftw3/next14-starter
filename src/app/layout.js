import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
