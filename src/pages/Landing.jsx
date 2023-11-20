import main from '../assets/images/main.svg';
import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {

    return (
      <Wrapper>
        <nav>
        <Logo/>        
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>This absolutely blew me away! The way the music and the imagery worked together was truly magical. It was clear that a lot of thought and creativity went into the making of this song, and it really paid off. I was completely transported to another world as I watched, and I couldn't stop thinking about it for days afterward. Kudos to the artist and creators who put this masterpiece together!</p>
            <Link to='/register' className='btn btn-hero'>Login/Register</Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    );
  };


  export default Landing;