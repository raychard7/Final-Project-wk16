import {Card, Button, Form} from 'react-bootstrap';
import { NewPokemonForm } from './newPokemonForm';
import { updateTrainer } from './rest/TrainersApi';
import './css/cssTrainer.css'
//destructure prop w/ ({trainerProp, 2ndProp, 3rdprop}) can remove props.
function Trainer({trainer, updateTrainer, deleteTrainer}) {

  

  //pokemon id orrrr just name?
  const deletePokemon = (pokemonid) => {
    console.log(pokemonid)

    //with a d updated no update.
    const updatedTrainer = {
      ...trainer,
      pokemonteam: trainer.pokemonteam.filter((x) => x !== pokemonid)//define pokemon id 
    } ;
   
    updateTrainer(updatedTrainer);
  }

  const addPokemon = (pokemon) => updateTrainer({...trainer, pokemonteam:[...trainer.pokemonteam , pokemon]});

  

  const pokemonsFunction = () => (
    <ul>
      {trainer.pokemonteam.map((pokemon, index) => (
        <li key={index}>
          <label> {`${pokemon}`}</label>
          <button onClick={(e) => deletePokemon(pokemon.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
    
  return (
    <Card className='m-3' >
      
      <Card.Body>
        <Card.Title>Trainer: {trainer.trainername} </Card.Title>
        <Button variant="danger" onClick={()=>deleteTrainer(trainer.id)}>Delete Trainer</Button>
        {/* Maps through pokemon team and creates index */}
        
        <NewPokemonForm addPokemon={addPokemon}/>
        <div className='d-flex'>
          {trainer.pokemonteam.map((pokemon,index) => {
           return <div>
                    <div className='border p-3 bg-light m-3 flex-fill'>{pokemon}
                    <Button onClick={()=> deletePokemon(pokemon)} variant="warning" size="sm" className='button1'>Send to Prof Oak</Button>
                    </div>
                    
                  </div>
                  
            }
          )}
        </div>
        
        
      </Card.Body>
    </Card>
  );
}

export default Trainer;


