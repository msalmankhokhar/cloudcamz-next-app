import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

export function PrimaryButton({ children, className = '', href, type = 'button', onClick }: ButtonProps) {
  const classes = `bg-brandLight-400 hover:bg-brandLight-300 text-brandDark-900 px-6 py-3 rounded-lg font-semibold transition-colors ${className}`

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export function SecondaryButton({ children, className = '', href, type = 'button', onClick }: ButtonProps) {
  const classes = `border border-brandLight-400 text-brandLight-400 px-6 py-3 rounded-lg font-semibold hover:bg-brandLight-400/10 transition-colors ${className}`

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
