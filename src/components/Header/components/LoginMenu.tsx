'use client'
import { deleteCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

interface LoginMenuProps {
  hasLogged: boolean
}

export default function LoginMenu({ hasLogged }: LoginMenuProps) {
  const router = useRouter()
  const [isLogged, setIsLogged] = useState(hasLogged)

  function handleLogin() {
    console.log('login')
    setIsLogged(true)
    setCookie('token', '123')
    router.push('/middleware-example/protected-route')
  }

  function handleLogout() {
    console.log('logout')

    setIsLogged(false)
    deleteCookie('token')
    router.push('/middleware-example/home')
  }

  return isLogged ? (
    <Button className="p-4 text-lg" variant={'outline'} onClick={handleLogout}>
      Logout
    </Button>
  ) : (
    <Button className="p-4 text-lg" variant={'outline'} onClick={handleLogin}>
      Login
    </Button>
  )
}
