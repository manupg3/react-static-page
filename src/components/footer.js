import React from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'


export default function footer

() {
  return (
    <div>
     <div className='pre-footer'>
     <h4>Upgrade</h4>  
     </div>
     <div className='principal-footer'>
     <div className=''>
            <div className="content">
          
  <div className="row principal">
    <div className="col-sm" >
       <ul className='ul-footer'>
          <li className='li-footer'>Management</li>
          <li className='li-footer'>Invest</li>
          <li className='li-footer'>Advisor</li>
      </ul>   
    </div>
    <div className="col-sm">
    <ul className='ul-footer'>
          <li className='li-footer'>Contact</li>
          <li className='li-footer'>How it works?</li>
          <li className='li-footer'>Us</li>
      </ul>  
    </div>
    <div className="col-sm">
    <div className='buttons-footer'>
    <h4 className="text-footer-buttons">you have doubts?</h4>
    <Button className="st-button">Talk with us</Button>  
    </div>
   </div>
  </div>
  <div className="row footer-bottom">
  <div className="col-sm">
       <div className="copyrigth-footer">  
         <h5 className="copy-text">Copirigth@2022 - Manuel Peña Ramos</h5>  
      </div>   
  </div>
  <div className="col-sm">
    <div className="social-footer">
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faFacebook} />
    </div>   
   </div>
 
  </div>

</div>
        </div>
     </div>
      

    </div>
  )
}
