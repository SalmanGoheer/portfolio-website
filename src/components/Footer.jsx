import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer className='bg-gray-900 w-full py-10 text-center'>

        
        
<div className='flex justify-center'>
  <div className='flex items-center gap-5 text-slate-300'>
  <a href="https://github.com/SalmanGoheer" target='_blank'>
  <FontAwesomeIcon className="w-8 sm:w-10 hover:text-white" icon={faGithub} />
  </a>
  <a href="https://www.linkedin.com/in/salmangoheer/" target='_blank'>
  <FontAwesomeIcon className="w-8 sm:w-10 hover:text-white" icon={faLinkedin} />
  </a>
  <a href="https://twitter.com/SalmanGoheer" target='_blank'>
  <FontAwesomeIcon className="w-8 sm:w-10 hover:text-white" icon={faTwitter} />
  </a>
  <a href="https://www.facebook.com/pg3107" target='_blank'>
  <FontAwesomeIcon className="w-8 sm:w-10 hover:text-white" icon={faFacebook} />
  </a>
  </div>
</div>

        <hr
  className="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
       <p className='an'>© 2023 Copyright || Salman Akhtar</p>
    </footer>
  )
}

export default Footer