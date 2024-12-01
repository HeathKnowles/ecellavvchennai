import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FutureVentures",
  description: "Empowering the next generation of innovators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-gray-900 text-gray-100`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
