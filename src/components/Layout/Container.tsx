import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

export default function Container({ className, children }: ContainerProps) {
  return <div className={twMerge('mx-auto w-[90%]', className)}>{children}</div>
}
