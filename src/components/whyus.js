import React from 'react'
import '../assets/css/stylescontent.css';
import Button from 'react-bootstrap/Button';
import {motion} from 'framer-motion';

export default function () {


  return (
    <div className='div-why-us'>
    <h1 className='whyus-title'>Why Us?</h1>
    <p className='whyus-text'>Know your Core Web Vitals are healthy before you merge to 
        production. Run automated tests for performance and reliability 
        on every pull request with Vercel Checks.
        </p> 
     
        <motion.button
         whileTap={{scale: 1.1,}}
         className="whyus-button btn btn-primary">Learn More</motion.button>  
        </div>
  )
}
