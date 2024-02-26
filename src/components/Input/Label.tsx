import { LabelHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className={twMerge(props.className)} />
}
