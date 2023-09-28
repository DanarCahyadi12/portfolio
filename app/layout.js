
import { Inter } from 'next/font/google'
import Providers from './providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portofolio',
  description: 'My portofolio ',
  icons : {
    icon  : "/title.svg"
  }
}
 

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior : 'smooth'}}>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
