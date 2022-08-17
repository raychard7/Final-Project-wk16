import {Card, Button, Form} from 'react-bootstrap';
import { NewPokemonForm } from './newPokemonForm';
import { updateTrainer } from './rest/TrainersApi';

//destructure prop w/ ({trainerProp, 2ndProp, 3rdprop}) can remove props.
function Trainer({trainer, updateTrainer, deleteTrainer}) {

  const addPokemon = (pokemon) => updateTrainer({...trainer, pokemonteam:[...trainer.pokemonteam , pokemon]})


  // const pokemons =() =>(

  //   {trainer.pokemonteam.map((pokemon, index) => (
  //     <Card style={{ width: '12rem' }}>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Title>{pokemon}</Card.Title>
  //       <Card.Text>
  //         stats
  //       </Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>
  //   ))}
  // )

  return (
    <Card style={{ width: '20rem' }}>
      
      <Card.Body>
        <Card.Title>Trainer: {trainer.trainername} </Card.Title>
        <Button variant="danger" onClick={()=>deleteTrainer(trainer.id)}>Delete Trainer</Button>
        {/* does this map through pokemonteam? */}
        {trainer.pokemonteam.map((pokemon,index) => {
          <Card.Text>{pokemon}</Card.Text>
        })}
        <NewPokemonForm addPokemon={addPokemon}/>
        cards
      </Card.Body>
    </Card>
  );
}

export default Trainer;


