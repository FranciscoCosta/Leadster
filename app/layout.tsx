import { relative } from 'path'
import './globals.css'
import { Footer } from '@/components'
export const metadata = {
  title: 'Leadster',
  description: 'Leadster - Mais conversão, menos conversinha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="relative">
        {children}
      </body>
      <Footer />
    </html>
  )
}
