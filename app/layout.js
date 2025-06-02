import { Geist, Geist_Mono } from "next/font/google"; // Corrected: Geist_Sans to Geist
import "./globals.css";

const geistSans = Geist({ // Assuming Geist is the correct import for sans-serif
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fuckin Do It",
  viewport: "width=device-width, initial-scale=1.0", // Added viewport meta tag
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`} // Added font-sans as a base Tailwind utility if Geist is your primary sans
      >
        {children}
      </body>
    </html>
  );
}
