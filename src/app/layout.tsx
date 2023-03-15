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
