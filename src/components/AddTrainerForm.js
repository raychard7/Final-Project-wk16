import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

 const AddTrainerForm = (props) => {
  const[trainer, setTrainer]=useState({
    
    trainerName: '',
    pokemon:  ''
  })

//Working on creating onsubmit method and holding state in hook. need to create housesApi.pot method still

//   const onSubmit = (e) => {
       
//     e.preventDefault();
//     //name has to have a value to be true
//     if(trainer) {
       
//         // housesApi.post(trainer)
//          //posts new house with name written
//         setTrainer(''); //after house posted to api, reset name to blank ' '
        
//     } else {
//         console.log('invalid input')
//     }
// };

  return (
    // <Form onSubmit={onSubmit}>
    <Form >
    <Form.Group className="mb-3" controlId="formTrainer">
      <Form.Label>Trainer Name</Form.Label>
      <Form.Control type="email" placeholder="Enter Trainer Name" onChange={e=> setTrainer({trainerName: e.target.value})} />
    </Form.Group >

    <Form.Group className="mb-3" controlId="formPokemon">
      <Form.Label>Pokemon</Form.Label>
      <Form.Control type="password" placeholder="Enter Pokemon name" onChange={e=> setTrainer({pokemon: e.target.value})} />
    </Form.Group>
   
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default AddTrainerForm