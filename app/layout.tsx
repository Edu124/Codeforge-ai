import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeForge AI - Your Offline AI Code Assistant',
  description: 'Code faster with AI. 100% private, works offline, no subscriptions. Generate code, write SQL, and get instant AI help.',
  keywords: 'AI code assistant, offline AI, code generation, SQL assistant, LM Studio, Claude API',
  authors: [{ name: 'CodeForge AI' }],
  openGraph: {
    title: 'CodeForge AI - Your Offline AI Code Assistant',
    description: 'Code faster with AI. 100% private, works offline, no subscriptions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
