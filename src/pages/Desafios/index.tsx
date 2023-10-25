import { useParams } from "react-router-dom"
import { Title } from "../../components/Title"

export const Desafios = () => {

  const params = useParams()
  const { id } = params 
  const title = id ? `Desafio ${id}` : "Desafios"

  return (
    <Title title={title} />
  )
}