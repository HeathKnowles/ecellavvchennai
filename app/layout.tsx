import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Navbar from './components/Navbar'
import Image from 'next/image'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Cell Amrita Vishwa Vidyapeetham',
  description: 'Innovate, Endeavour, Elate - Let\'s build, innovate and grow together',
  icons: {
    icon: '/logo-blue.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} bg-blue-900 text-white`}>
        <header className="bg-blue-800 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/logo.svg" alt="E-Cell Logo" width={50} height={50} />
              <span className="ml-2 text-xl font-bold">E-Cell Amrita</span>
            </div>
            <Navbar />
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-blue-800 py-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} E-Cell Amrita Vishwa Vidyapeetham , Chennai. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

