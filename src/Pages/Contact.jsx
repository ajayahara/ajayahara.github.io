import React from 'react'
import "../CSS/Contact.css"
export const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h1 className='contact-heading'>Contact Me!</h1>
        <div className='contact-container'>
          <div className='my-contact'>
              <div className='mycontact-div1'>
                My Contact
              </div>
              <div className='mycontact-div2'>
                <div>
                  <img src="/Images/mail.png" alt="" />
                  <span>abak00350@gmail.com</span>
                </div>
                <div>
                  <img src="/Images/call.png" alt="" />
                  <span>+91 6370014498</span>
                </div>
                <div>
                  <img src="/Images/location.png" alt="" />
                  <span>Cuttack, Odisha</span>
                </div>
                <div>
                  <img src="/Images/github.png" alt="" />
                  <span>ajayahara</span>
                </div>
              </div>
          </div>
          <form className='contact-form'>
                <input type="text" required placeholder='Name Here'/>
                <input type="email" required placeholder='Email Here'/>
                <input type="mobile" placeholder='Phone Here' required/>
                <textarea placeholder='Message Here'></textarea>
                <input type="submit" value={"Send"} />
          </form>
        </div>
    </div>
  )
}
