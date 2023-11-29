import Providers  from './providers'
import React from 'react'
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
export const metadata = {
  title: 'Danar Cahyadi | Software Engineering Student',
  description: 'Danar cahyadi | Software Engineering student',
  icons : {
    icon  : "/title.svg"
  }
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={ubuntu.className} style={{scrollBehavior: 'smooth'}}> 
      <body style={{backgroundColor: '#EDF2F7'}}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}