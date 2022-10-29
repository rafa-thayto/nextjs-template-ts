import clsx from 'clsx'
import { PropsWithChildren } from 'react'

interface FirstComponentProps {
  className?: string
}

export const FirstComponent = ({ className, children }: PropsWithChildren<FirstComponentProps>) => {
  return (
    <div className={clsx('px-6 py-2', className)}>
      <h2>First Component</h2>
      {children}
    </div>
  )
}
