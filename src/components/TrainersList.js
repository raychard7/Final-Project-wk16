import React, {useState, useEffect} from 'react'

import Trainer from './Trainer'


export const TrainersList = ({trainers, deleteTrainer,updateTrainer}) => {


  return (
    <div>
      <div>TrainersList</div>
      {/* cards of each trainer */}
      {trainers.map(trainer => (
        // <Trainer {...trainer}/> 
        //Don't pass in a spread operator to component instead rename as prop so you can pass it in.
        <Trainer trainer={trainer} //no longer use trainerArg to reference.
        //instead use trainerProp one bucket dumping its contents into another.
        deleteTrainer={deleteTrainer}
        updateTrainer={updateTrainer}
        key={trainer.id}
        />
      ))} 
    </div>
    
  )
}

export default TrainersList