import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
export const NewPokemonForm = ({addPokemon}) => {
  const [pokemon, setPokemon]=useState('')

 
  const handleSubmit =(e) => {
    e.preventDefault();
    if(pokemon){
      addPokemon(pokemon)
      setPokemon('');
    } else {
      console.log('invalid input')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
          <Form.Group >
            <Form.Control type="pokemonname" 
            placeholder='Pokemon name'
            onChange={(e)=> setPokemon(e.target.value)}
            value={pokemon}
            />
          </Form.Group>
          <Button type= "submit" variant="primary">Catch Pokemon</Button>
    </Form>
  )
}
