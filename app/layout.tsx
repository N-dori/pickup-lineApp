import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './assets/scss/main.scss'

const lora = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pick up line generator',
  description: 'Pick up line generatorrrrrrr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      
        {children}
     
      </body>
    </html>
  )
}
