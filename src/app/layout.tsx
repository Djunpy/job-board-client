import { Roboto } from 'next/font/google'

import { NextUIProvider } from '@nextui-org/react'
import "./globals.scss"
import StoreProvider from './StoreProvider'



const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode,
  params: {locale: string};
}>) {

  return (  
    <html lang={locale}>
      <body
        className={roboto.className}
      >
        <StoreProvider>
          <NextUIProvider>
          {children}
          </NextUIProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
