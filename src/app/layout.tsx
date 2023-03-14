"use client";

import './globals.css'
import Header from '@/components/Header'
import ContextProvider from '@/context'
import { queryClient } from '@/utils/queryClient'
import { QueryClientProvider } from 'react-query'

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
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
        <body>
          <ContextProvider>
            <QueryClientProvider client={queryClient}>
              <Header />
              {children}
            </QueryClientProvider>
          </ContextProvider>
        </body>
    </html>
  )
}
