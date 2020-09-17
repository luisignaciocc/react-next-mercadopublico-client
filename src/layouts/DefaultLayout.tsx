import React from 'react'

type Props = {
  children: any
}

const DefaultLayout = ({ children }: Props) => {

  return (
    <>{children}</>
  )
}

export default DefaultLayout