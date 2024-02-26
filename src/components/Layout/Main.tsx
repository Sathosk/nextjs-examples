import { twMerge } from 'tailwind-merge'

interface MainProps {
  className?: string
  children: React.ReactNode
}

export default function Main({ children, className }: MainProps) {
  return (
    <main
      className={twMerge(
        'min-h-screen bg-gray-500 py-10 text-white',
        className,
      )}
    >
      {children}
    </main>
  )
}
