import React from 'react'
import "../CSS/Contact.css"
export const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1 className='contact-heading'>CONTACT ME!</h1>
      <div className='contact-container'>
        <div className='my-contact'>
          {/* <div className='mycontact-div1'>
            My Contact
          </div> */}
          <div className='mycontact-div2'>
            <a href="#123">
              <img src="/Images/mail.png" alt="" />
              <span>abak00350@gmail.com</span>
            </a>
            <a href="#123">
              <img src="/Images/call.png" alt="" />
              <span>+91 6370014498</span>
            </a>
            <a href="#123">
              <img src="/Images/location.png" alt="" />
              <span>Cuttack, Odisha</span>
            </a>
            <a href="https://github.com/ajayahara" target='_blank' rel="noreferrer">
              <img src="/Images/github.png" alt="" />
              <span>ajayahara</span>
            </a>
            <a href="https://linkedin.com/in/https://www.linkedin.com/in/ajaya-kumar-behera-a56549237/" target='_blank' rel="noreferrer" >
              <img src="/Images/linkedin.png" alt="" />
              <span>Ajaya Kumar</span>
            </a>
          </div>
        </div>
        <form className='contact-form'>
          <input type="text" required placeholder='Name Here' />
          <input type="email" required placeholder='Email Here' />
          <input type="mobile" placeholder='Phone Here' required />
          <textarea placeholder='Message Here'></textarea>
          <input type="submit" value={"Send"} />
        </form>
      </div>
    </div>
  )
}
