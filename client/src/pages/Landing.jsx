import React from 'react'
import main from '../assets/images/main.svg'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/LandingPage.js'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (<Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className="container page">
      <div className="info">
        <h1><span>Mazhu</span> App</h1>
        <p>I have ADHD, and you do too. Seeing a wall of text full of tips just makes me nope out! Stash it in a bookmark folder to gather dust, right? Bookmark chaos—never gonna organize that mess, LOL! A ton of screenshots clogging up the photo gallery, and then I have to clear out space? Ugh, no thanks! Say goodbye to all that hassle—it's a game-changer for lazy folks like us!</p>
        <Link to="/register" className="btn btn-primary register-link">Register</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
      <img src={main} alt="mark hunt" className='img main-img' />
    </div>

  </Wrapper>

  )
}


export default Landing