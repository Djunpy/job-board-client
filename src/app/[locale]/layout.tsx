import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'




export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode,
  params: {locale: string};
}>) {

  const messages = await getMessages();


  return (  
			<NextIntlClientProvider locale={locale} messages={messages}>
				<Header/>
					{children}
				<Footer/>
			</NextIntlClientProvider>
  );
}
