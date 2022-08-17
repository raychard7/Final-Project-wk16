import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
export const NewPokemonForm = ({addPokemon}) => {
  const [pokemon, setPokemon]=useState('')

 //Submit function won't run. My alert won't appear but whole card rerenders
  const handleSubmit =(e) => {
    e.preventDefault();
    alert("handleSubmit inside")
    if(pokemon){
      alert("Submit func worked")

      addPokemon(pokemon)
      setPokemon('');
    } else {
      console.log('invalid input')
    }
  }

  return (
    <Form>
          <Form.Group onSubmit={handleSubmit}>
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
