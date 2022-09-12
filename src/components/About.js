import React from 'react'
import AlertButton from './AlertButton'
import SideBar from './OffCanvas'
import ThemeButton from './ThemeButton'
import { Container } from 'react-bootstrap'

export default function About() {

  const code = new URLSearchParams(window.location.search).get('code')


  return (
    <React.Fragment>
      <Container>
      <ThemeButton/>
      </Container>
        
        <div>You have just left professor Oaks Lab Ready to start your journey to become a pokemon master</div>
        <div>You notice movement in the console bushes close by</div>

        <AlertButton />
        <h6>Action: Close console</h6>
        
        <SideBar />   
        
        </React.Fragment>
    

   
  )
}
