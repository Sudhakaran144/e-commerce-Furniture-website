import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_content">
            <div className="f_address fo">
                <h1 className="f_logo">Funiro</h1>
                <div className="f_addr">
                    <p>400 University Dreive Suitr 200 cpral Gables</p>
                    <p>FL 437443 USA</p>
                </div>
            </div>
            <div className="f_links fo">
                <p className='f_l'>Links</p>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="f_help fo">
                <p className='f_l'>Help</p>
                <ul>
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>
            <div className="f_newsletter fo">
                <p className='f_l'>Newsletter</p>
                <div className="subscribe">
                    <input type="email" placeholder='Enter Your Email Address' />
                    <button className="sub">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer