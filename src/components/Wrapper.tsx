import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Wrapper = ({ children }: Props) => {
  return (
    <div className="p-4 py-6 bg-neutral-200 grid place-content-center min-h-screen font-primary">
      {children}
    </div>
  )
}

export default Wrapper
