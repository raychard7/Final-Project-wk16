import React, {useState, useEffect} from 'react'
import {get, post, deleteMethod, put } from './rest/TrainersApi'
import { BrowserRouter as Router,Route , Routes} from 'react-router-dom'
import AddTrainerForm from './AddTrainerForm'
// wrapped trainerslist in brackets and it worked to import. It didn't before for some reason.
import {TrainersList} from './TrainersList'
import About from './About'

const AppRouter = () => {

  // wan't set state to start as empty array
const [trainers,setTrainers]= useState([])

//fetch trainers on first render.
useEffect(()=>{
  fetchTrainers()
},[])//[] makes 1 run once.

const fetchTrainers =async () => {
  const trainers =await get();
  setTrainers(trainers)
}

const updateTrainer =async (updatedTrainer) => {

  await put(updatedTrainer);
  fetchTrainers();
}

const newTrainer =async (trainer) =>{
  console.log(trainer)
  await post(trainer);
  fetchTrainers();
}

const deleteTrainer =async(id) =>{
  await deleteMethod(id);
  fetchTrainers();
}

  return (
    <Routes>
      <Route path='/add' element={<AddTrainerForm newTrainer={newTrainer} />}>
      </Route>
      <Route path="/" element={<TrainersList trainers={trainers}
              deleteTrainer={deleteTrainer}
              updateTrainer={updateTrainer}
              />}>
    </Route>
    <Route path='/about' element={<About />}>

    </Route>
    </ Routes>
  )
}

export  default AppRouter