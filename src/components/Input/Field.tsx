import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type FieldProps = HTMLAttributes<HTMLDivElement>

export function Field(props: FieldProps) {
  return (
    <div
      {...props}
      className={twMerge('flex flex-col gap-2', props.className)}
    />
  )
}
