import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer(props) {

  return (
    <footer className='footer'>
      <a href="https://github.com/kahilnayton?tab=repositories">

        <i class="im im-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/kahilnayton/">
        <i className="im im-linkedin"></i>
      </a>
      <FontAwesomeIcon icon={['fal', 'boxing-glove']} />
      <FontAwesomeIcon icon={['far', 'boxing-glove']} />
      <FontAwesomeIcon icon={['fas', 'boxing-glove']} />
      <p>2019</p>
    </footer>
  )
}

