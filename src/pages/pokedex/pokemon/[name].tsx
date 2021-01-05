import axios from 'axios'

//Tipagem
import { GetStaticProps, GetStaticPaths } from 'next' 

import { Container, ImageContainer, InfoContainer, Icons, Info, Image, Back, Hearth, Types, Ability } from './styled'
import { useRouter } from 'next/router'

import { PokePaths, Pokemon } from '../../../interfaces/index'
import Link from 'next/link';

const PokemonData = ({ pokemon }: PokePaths) => {
  const baseImgUrl = 'https://pokeres.bastionbot.org/images/pokemon/'
  const { isFallback } = useRouter()

  console.log(pokemon.stats[0].base_stat)
  
  if( isFallback ) {
    return <p>Carregando...</p>
  }

  let idFormated = '#00${pokemon.id}'
  let colorbg = 'all'


  if( String(pokemon.id).length == 2 ) {
    idFormated = `#0${pokemon.id}`
  } else {
    idFormated = `#${pokemon.id}`
  }

  
  if( pokemon.types[0].type.name == 'fire' ) {
    colorbg = `red`
  }

  if( pokemon.types[0].type.name == 'grass' ) {
    colorbg = `green`
  }

  if( pokemon.types[0].type.name == 'water' ) {
    colorbg = `blue`
  }
  
  if( pokemon.types[0].type.name == 'bug' ) {
    colorbg = `brown`
  }

  const abilities = (pokemon.abilities.length) - 1



  return (
    <>
      <Container className={colorbg}>
        <ImageContainer className={colorbg}>
          <Icons>
            <Link href="/pokedex">
              <a>
                <Back />
              </a>
            </Link>
            <Hearth />
          </Icons>

          <Info>
            <div>
              <h1>{pokemon.name}</h1>

              <Types>
                { pokemon.types.map( ({ type: { name } }: any) => (

                <p>{ name }</p>

              )) }
              </Types>
            </div>

            <span>{ idFormated }</span>
          </Info>

          <Image>
            <img src={`${baseImgUrl}${pokemon.id}.png`} alt=""/>

          </Image>
          
        </ImageContainer>
        <InfoContainer>
          <section>
            <h1>About</h1>
            
            <div>
              <h3>Species: </h3>
              <p>{pokemon.species.name}</p>
            </div>

            <div>
              <h3>Height: </h3>
              <p>{pokemon.height} cm</p>
            </div>

            <div>
              <h3>Weight: </h3>
              <p>{pokemon.weight} kg</p>
            </div>

            <Ability>
              <h3>Abilities: </h3>
              <p>{pokemon.abilities.map((item: any, index: number) => {
                if( index < abilities ) {
                  return <span key={index}> {item.ability.name}, </span>
                } 
                if(index == abilities) {
                  return <span key={index}> {item.ability.name} </span>
                }

              })}</p>
            </Ability>
            <hr />

            { pokemon.stats.map( (item: any, index: number) => (
              <div key={index}>
                <h3>{ item.stat.name }</h3>
                <p>{item.base_stat}</p>
              </div>
            )) }
            
          </section>

        </InfoContainer>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
  const pokemons = await res.data

  const paths = pokemons.results.map((pokemon: Pokemon) => {
    return { params: { name: pokemon.name } }
  })

  return {
    paths,
    fallback: true // See the "fallback" section below
  }
}


export const getStaticProps: GetStaticProps = async ( context ) => {
  const { name } = context.params
  
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ name }`)
  const data = await res.data


  return {
    props: { 
      pokemon: data,
    },
  }
}



export default PokemonData
