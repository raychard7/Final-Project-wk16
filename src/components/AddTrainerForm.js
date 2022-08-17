import React, {useState} from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import {Form, Button} from 'react-bootstrap'
import TrainersList from './TrainersList'

//newTrainer props being passed into <AddTrainer newTrainer={newTrainer} />}> 
//so we see it on ln 9
//We could pass in more arguments or methods if we want like {newTrainer,updateTrainer,deleteTrainer}
//But we only need {newTrainer} method of this form.
 const AddTrainerForm = ({newTrainer}) => {
  const[trainer, setTrainer]=useState([])

//Working on creating onsubmit method and holding state in hook. need to create housesApi.pot method still

  const onSubmit = (e) => {
       
    e.preventDefault();
    //name has to have a value to be true
    //trainer is the state
    if(trainer) {
     
      newTrainer(trainer)
      e.target.reset(); //after house posted to api, reset name to blank ' '
        
    } else {
        console.log('invalid input')
    }
};

  return (
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="formTrainer">
      <Form.Label>Trainer Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Trainer Name" onChange={e=> setTrainer( e.target.value)} />
    </Form.Group >
    <Button variant="primary" type="submit" >
      Submit
    </Button>
  </Form>
  )
}

export default AddTrainerForm