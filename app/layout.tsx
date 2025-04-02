import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DriveBurn',
  description: 'Best Drive Site for Movies & Series Download.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
