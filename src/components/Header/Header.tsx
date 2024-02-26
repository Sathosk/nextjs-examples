import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'
import Link from 'next/link'

import Container from '../Layout/Container'
import LoginMenu from './components/LoginMenu'

export default function Header() {
  const hasLogged = getCookie('token', { cookies })

  return (
    <header className="flex h-20 items-center bg-gray-700">
      <Container className="flex justify-between">
        <Link
          href={'/'}
          className="block text-4xl font-bold text-white hover:cursor-pointer"
        >
          Logo
        </Link>
        <LoginMenu hasLogged={!!hasLogged} />
      </Container>
    </header>
  )
}
