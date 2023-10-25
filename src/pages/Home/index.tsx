import Stack from "@mui/material/Stack"
import { Title } from "../../components/Title"
import Button from '@mui/material/Button'
import { Airplane } from "@phosphor-icons/react"

export const Home = () => {
  return <>
    <div>
      <Title title="Titulo da Home Page" />
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        <Button component="label" variant="contained" startIcon={<Airplane size={32} weight="bold" />}>
          Butão com icone
        </Button>
      </Stack>

    </div>
  </>
}