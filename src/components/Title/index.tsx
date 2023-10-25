import React from "react"

interface Props {
  title: string
}

export const Title: React.FC<Props> = ({title}) => {
  return <h1>{title}</h1>
}