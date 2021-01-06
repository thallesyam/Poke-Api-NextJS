import axios from 'axios'

import { Container, StyledLink, Btn } from '../../../components/styles/pokedex/styled'

import { Pokemon, Pokemons } from '../../interfaces'
import Link from 'next/link'
import { useRouter } from 'next/router'



const pokedex = ({ pokemons, pokemons: { next, previous }, offset }: Pokemons) => {
  const router = useRouter()
  const offSetNumber = 10


  return (
    <>
      <Container>
        { pokemons.results.map( (pokemon: Pokemon, index: any) => {
          const baseImgUrl = 'https://pokeres.bastionbot.org/images/pokemon/'
          const numberImg = (offset) + (index + 1)

          return (
            
            <Link href={`pokedex/pokemon/${pokemon.name}`} key={ index }>
              <StyledLink>
                <h1>{pokemon.name}</h1>
                <img src={`${baseImgUrl}/${numberImg}.png`} alt={pokemon.name} />
              </StyledLink>
            </Link>
          )
          
        }) }
      <div>
        { previous !== null ? 
          ( <Btn onClick={() => router.push(`/pokedex/?offset=${ offset - offSetNumber }&limit=10`)} >Anterior</Btn> ) :
            <Btn className="disabled">Anterior</Btn>
        } 
        { next !== null ? 
          ( <Btn onClick={() => router.push(`/pokedex/?offset=${ offset + offSetNumber }&limit=10`)} >Próximo</Btn> ) :
            <Btn className="disabled">Próximo</Btn>
        } 
      </div>
      </Container>

    </>
  )
}

export async function getServerSideProps({ query: { offset = 0 } }) {

  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`)
  const pokemons = await res.data

  console.log(pokemons)

  return {
    props: {
      pokemons,
      offset: +offset
    },
  }
}


export default pokedex
