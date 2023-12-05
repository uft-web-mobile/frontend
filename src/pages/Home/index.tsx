import Stack from "@mui/material/Stack"
import Button from '@mui/material/Button'
import { Airplane } from "@phosphor-icons/react"
import { Title } from "../../components/Title"
import Illustration from '../../assets/img/illustration.png';
import "./style.css"
import ListDesafios from "./components/ListDesafios";

export const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="title">
          <Stack spacing={10} direction="row">
            <div className="contentText">
              <Title title="Titulo da Home Page" size={64} />
              <p className="content-text">
                Em nossa plataforma de aprendizado de programação, você não apenas 
                aprenderá a codificar, mas também será apresentado a conceitos 
                fundamentais de programação. Esses conceitos formam a base do 
                pensamento computacional e são essenciais para se tornar um programador eficaz.
              </p>
            </div>
              <img className="img" src={Illustration} alt="ilustação de um homem programando"/>  
          </Stack>
        </div>
        <h1>Desafios</h1>
        <span>Aqui fica a lista de desafios, fazer uma tabela estilo a do <a href="https://leetcode.com/problemset/all/" target="_blank">leetcode</a></span>
      </div>
    </div>
  )

}