import React from 'react';
import {BrowserRouter, BrowserRouter as Router, NavLink} from 'react-router-dom'
import AppRouter from './AppRouter';
import './css/cssHeaderStyle.css'

//Head is a funnpmct comp.
//navlink is used insted of<a> tag
export const Header = () => {
  return (

    <header>
        <h1 className='header'>Pokemon Trainers</h1>
        <div className="links">
        <Router>
          {/* for anchor tag its <a href="/add" 
          to / or /add is a path to a local file?*/}
          <NavLink to="/" className="link" activeClassName="active" exact>
            Trainer List
          </NavLink>
          <NavLink to="/add" className="link" activeClassName="active">
            Add Trainer
          </NavLink>
          <AppRouter />
        </Router>
        </div>
    </header>
    
  )
}

