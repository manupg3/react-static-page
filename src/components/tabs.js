import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../assets/css/management.css'

export default function (props) {
  console.log("TITLE TAB",props.titleTabs);
  return (
    <div>
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 tabs">
  <Tab eventKey="home" title={props.titleTabs[0]}>
  <div className='div-tab'> 
  <h4 className='text-tabs'>{props.textTabs[0]}</h4>
  </div>   
  </Tab>
  <Tab eventKey="profile" title={props.titleTabs[1]}>
  <div className='div-tab'>
  <h4 className='text-tabs'>{props.textTabs[1]}</h4>
  </div>
  </Tab>
  <Tab eventKey="contact" title={props.titleTabs[2]}>
  <div className='div-tab'>
  <h4 className='text-tabs'>{props.textTabs[2]}</h4>
  </div>
  </Tab>
</Tabs>
    </div>
  )
}
