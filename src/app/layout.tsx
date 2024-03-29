"use client";

import './globals.css'
import ContextProvider from '@/context/MyContext'
import { QueryClientProvider } from 'react-query'
import { Footer, Header } from '@/components';
import { queryClient } from '@/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
        <body>
          <ContextProvider>
            <QueryClientProvider client={queryClient}>
              <Header />
              {children}
              <Footer />
            </QueryClientProvider>
          </ContextProvider>
        </body>
    </html>
  )
}
