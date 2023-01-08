import type { FC } from 'react'

type InputProps = {
  label: string
  name: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} {...props} />
    </>
  )
}

export default Input
