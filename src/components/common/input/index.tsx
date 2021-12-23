import { InputHTMLAttributes } from 'react'
import { NextPage } from 'next'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  onChange?: (value: any) => void
  label: string
  columnClasses?: string
}

export const Input: NextPage<InputProps> = ({
  onChange,
  label,
  columnClasses,
  id,
  ...inputProps
}: InputProps) => {
  return (
    <div className={`column field ${columnClasses}`}>
      <label className="label" htmlFor={id}>
        {label}: *
      </label>
      <div className="control">
        <input
          id={id}
          {...inputProps}
          onChange={(e) => {
            if (onChange) onChange(e.target.value)
          }}
          type="text"
          className="input"
        />
      </div>
    </div>
  )
}
