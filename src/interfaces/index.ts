// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export interface Pokemons {
  pokemons: any,
  count: Number,
  next?: string,
  previous?: string,
  results: Array<[]>
  offset: number
}

export interface Pokemon {
  name: string | undefined,
  url: string,
}

export interface PokePaths {
  pokemon: {
    name: string,
    order: number,
    types: any,
    id: number,
    species: {
      name: string
    },
    height: number,
    weight: number,
    abilities: any,
    stats: any,
    ability: {
      name: string
    }
  }
}