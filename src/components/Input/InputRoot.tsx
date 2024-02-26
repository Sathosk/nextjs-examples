import React, {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react'
import {
  RegisterOptions,
  useFormContext,
  UseFormRegisterReturn,
} from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputRootProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  registerOptions?: RegisterOptions
}

export function InputRoot(props: InputRootProps) {
  const { register } = useFormContext()

  const {
    onChange: registerOnChange,
    onBlur: registerOnBlur,
    ...registerProps
  } = register(props.name, {
    ...(props.registerOptions || {}),
  }) as UseFormRegisterReturn<string>

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e)
    }
    registerOnChange(e)
  }

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) {
      props.onBlur(e)
    }
    registerOnBlur(e)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault() // Prevent arrow keys from changing the value
    }

    if (props.type === 'number') {
      ;['e', '-', '+', '.', ','].includes(e.key) && e.preventDefault()
    }
  }

  return (
    <input
      id={props.name}
      {...props}
      {...registerProps}
      onChange={onChange}
      onBlur={onBlur}
      className={twMerge(
        'focus:shadow-blue text-black-950 w-full appearance-none rounded-md border border-zinc-300 px-4 py-1 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none ',
        props.className,
      )}
      onWheel={(e) => (e.target as HTMLElement).blur()}
      onKeyDown={handleKeyDown}
    />
  )
}
