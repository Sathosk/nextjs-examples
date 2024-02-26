import { twMerge } from 'tailwind-merge'

interface ISubmitButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  classNames?: string
}

export default function SubmitButton({
  children,
  classNames,
  ...props
}: ISubmitButton) {
  return (
    <button
      {...props}
      className={twMerge(
        'h-9 w-full rounded-md bg-blue-500 text-lg transition-all duration-200 hover:bg-blue-800',
        classNames,
      )}
    >
      {children}
    </button>
  )
}
