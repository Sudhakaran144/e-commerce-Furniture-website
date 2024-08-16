import React from 'react'
import './Contact.css'
import HeadConatiner from '../../Component/HeadContainer/HeadConatiner'
import Footer from '../../Component/Footer/Footer'
import ContactDetails from '../../Component/ContactDetails/ContactDetails'
 

const Contact = ({banner}) => {
  return (
    <div>
      <HeadConatiner banner = {banner} />  
      <ContactDetails />
      <Footer />
    </div>
  )
}

export default Contact