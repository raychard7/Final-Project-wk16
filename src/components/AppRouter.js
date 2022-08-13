import React from 'react'
import { BrowserRouter as Router,Route , Routes} from 'react-router-dom'
import AddTrainerForm from './AddTrainerForm'
// wrapped trainerslist in brackets and it worked to import. It didn't before for some reason.
import {TrainersList} from './TrainersList'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/add' element={<AddTrainerForm />}>
      </Route>
      <Route path="/" element={<TrainersList />}>
      
    </Route>
    </ Routes>
  )
}

export  default AppRouter