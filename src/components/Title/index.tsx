import React from "react"

interface Props {
  title: string,
  size: number,
}

export const Title: React.FC<Props> = ({title, size}) => {
  const style = {
    fontSize: size
  }
  return <h1 style={style}>{title}</h1>
}