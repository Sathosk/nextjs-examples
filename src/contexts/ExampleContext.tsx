'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

type ExampleContextType = {
  userName: string
  handleSetUsername: (name: string) => void
}

export const ExampleContext = createContext({} as ExampleContextType)

export function ExampleContextProvider({ children }: { children: ReactNode }) {
  const [userName, setUsername] = useState('')

  const handleSetUsername = (name: string) => {
    setUsername(name)
  }

  return (
    <ExampleContext.Provider value={{ userName, handleSetUsername }}>
      {children}
    </ExampleContext.Provider>
  )
}

export const useExampleContext = () => useContext(ExampleContext)
