import React from 'react'

import Form from '../Components/Form'

import { useDentiStates } from '../Components/utils/global.context'

import '../index.css'



const Contact = () => {

  const { dentiState } = useDentiStates();

  return (
    <div className={dentiState.theme}>

      <div className="contact-form">
      
        <h2>Want to know more?</h2>
      
        <p>Send us your questions and we will contact you</p>
      
        <Form/>
      
      </div>
      
    </div>
  )
}

export default Contact