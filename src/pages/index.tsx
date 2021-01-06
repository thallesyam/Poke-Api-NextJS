import Link from 'next/link'

import { Container } from '../../components/styles/home/styled'

const Home = () => {
  
  return (
    <>
      <Container>

        <h1>Bem vindo à Pokedéx <br />  Next JS</h1>
        <p>Para acessar todos os pokemons clique no botão</p>

        <Link href="/pokedex">
          <a> 
            Acessar  
          </a>
        </Link>

      </Container>
    </>
  )
}

export default Home
