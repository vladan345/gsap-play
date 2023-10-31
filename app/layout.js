import localFont from "next/font/local";
import "./globals.css";

const arista = localFont({
  src: [
    {
      path: "../public/fonts/arista2.ttf",
      weight: "400",
    },
  ],
  variable: "--font-arista",
});

export const metadata = {
  title: "GSAP Playground",
  description: "Generated with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${arista.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
