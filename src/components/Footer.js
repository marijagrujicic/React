import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Dark newsletter to receive notifications about series
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/Services'>About shows</Link>
            <Link to='/'>Cast</Link>
            <Link to='/'>Seasons</Link>
            <Link to='/'>Ratings</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Best moments</Link>
            <Link to='/'>Behind the scenes</Link>
            <Link to='/'>Funny moments</Link>
            <Link to='/'>Easter eggs</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Dark
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Dark © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              {/* eslint-disable-next-line */}
              <a href="https://www.facebook.com/DARKNetflix/" target="_blank"><i class='fab fa-facebook-f' /> </a>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
               {/* eslint-disable-next-line */}
              <a href="https://www.instagram.com/darknetflix/" target="_blank">  <i class='fab fa-instagram' /> </a>
              
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
               {/* eslint-disable-next-line */}
              <a href="https://www.youtube.com/watch?v=rrwycJ08PSA" target="_blank">  <i class='fab fa-youtube' /> </a>

            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
               {/* eslint-disable-next-line */}
              <a href="https://twitter.com/darknetflix" target="_blank"> <i class='fab fa-twitter' /> </a>

            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
