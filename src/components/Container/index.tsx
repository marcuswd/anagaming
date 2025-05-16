import { HTMLProps } from 'react'

export default function LayoutContainer({
  children,
  className,
}: HTMLProps<HTMLDivElement>) {
  return <div className={`${className || ''} w-11/12 mx-auto`}>{children}</div>
}
