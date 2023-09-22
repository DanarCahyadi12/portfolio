
import { Inter } from 'next/font/google'
import Providers from './providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portofolio',
  description: 'My portofolio ',
}
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/title.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
