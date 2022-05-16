import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function () {
  return (
    <div>
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 tabs">
  <Tab eventKey="home" title="Know your business">
  </Tab>
  <Tab eventKey="profile" title="Define the process">
  </Tab>
  <Tab eventKey="contact" title="We take care" >
  </Tab>
</Tabs>
    </div>
  )
}
