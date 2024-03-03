'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ExampleContextProvider } from '@/contexts/ExampleContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ExampleContextProvider>{children}</ExampleContextProvider>
    </QueryClientProvider>
  )
}
