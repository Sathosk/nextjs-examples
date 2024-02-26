'use client'

import { getCookie } from 'cookies-next'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // useEffect(() => {
  //   const token = getCookie('token')

  //   console.log('trigger')

  //   if (!token) {
  //     router.push('/middleware-example/home')
  //   }
  // }, [pathname, searchParams])

  return <>{children}</>
}
