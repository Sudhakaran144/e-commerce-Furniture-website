import React from 'react'
import './ContactDetails.css'
import { IoLocation } from 'react-icons/io5'
import { FaClock, FaPhone } from 'react-icons/fa'

const ContactDetails = () => {
  return (
    <div className='Contactdetails'> 
        <div className="contact-details">
            <h1>Get In Touch With Us</h1>
            <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className="contact-details-address">
            <div className="contact-details-address-left">
                <div className="contact-address-details">
                    <IoLocation />
                    <div className="contact-address-details-location">
                        <h3>Address</h3>
                        <p>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                </div>
                <div className="contact-address-details">
                    <FaPhone />
                    <div className="contact-address-details-location">
                        <h3>Phone</h3>
                        <p>Mobile: +(84) 546-6789 <br />Hotline: +(84) 456-6789</p>
                     </div>
                </div>
                <div className="contact-address-details">
                    <FaClock />
                    <div className="contact-address-details-location">
                        <h3>Working Time</h3>
                        <p>Monday-Friday: 9:00 - 22:00 <br />Saturday-Sunday: 9:00 - 21:00</p>
                     </div>
                </div>
            </div>
            <div className="contact-details-address-right">
                <div className="checkout-field">
                    <div className="checkout-name-field">
                        <label>Your Name</label>
                        <input type="text" placeholder='Name' />
                    </div>
                </div>
                <div className="checkout-field">
                    <div className="checkout-name-field">
                        <label>Email Address</label>
                        <input type="email" placeholder='abc@gmail.com' />
                    </div>
                </div>
                <div className="checkout-field">
                    <div className="checkout-name-field">
                        <label>Subject</label>
                        <input type="text" placeholder='It is Optional' />
                    </div>
                </div>
                <div className="checkout-field">
                    <div className="checkout-name-field">
                        <label>Message</label>
                        <input type="text" placeholder='Your Message' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails