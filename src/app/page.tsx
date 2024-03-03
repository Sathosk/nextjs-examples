import Link from 'next/link'

import Container from '@/components/Layout/Container'
import Main from '@/components/Layout/Main'

export default function page() {
  return (
    <Main>
      <Container>
        <ul>
          <li className="text-blue-900 underline hover:text-blue-900/60">
            <a href={'/middleware-example/home'}>Middleware Example</a>
          </li>
          <li className="text-blue-900 underline hover:text-blue-900/60">
            <a href={'/fetching-example/server'}>
              Fetching and rendering Server Side
            </a>
          </li>
          <li className="text-blue-900 underline hover:text-blue-900/60">
            <Link href="/fetching-example/client">
              Fetching and rendering Client Side
            </Link>
          </li>
          <li className="text-blue-900 underline hover:text-blue-900/60">
            <Link href="/layout-structure">Layout Structure</Link>
          </li>
        </ul>
      </Container>
    </Main>
  )
}
