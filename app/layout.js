import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Software Development Journey",
  description: "by Cristian Castro Oliva",
};

export default function RootLayout({ children }) {
  let header = (
    <header>
      <Link href={"/"}>
        <h1>My Software Development Journey</h1>
      </Link>
    </header>
  );

  let footer = (
    <footer>
      <p>Made by Cristian Castro Oliva </p>
    </footer>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
