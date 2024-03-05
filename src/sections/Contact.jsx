const Contact = ({handleNavClick}) => {
  return (
    <section id="contact" className="contact">
    <h2 className="heading">Contact <span>Me!</span></h2>
    <div className="contact-sci">
        <a href="#"><i className='bx bxl-facebook-circle'></i></a>
        <a href="#"><i className='bx bxl-linkedin-square' ></i> </a>
        <a href="#"><i className='bx bxl-github' ></i></a>
      </div>
    <form action="#">
      <div className="input-box">
        <div className="input-field">
          <input type="text" placeholder="Full Name" required />
          <span className="focus"></span>
        </div>
        <div className="input-field">
          <input type="text" placeholder="Email Address" required />
          <span className="focus"></span>
        </div>
      </div>
      <div className="input-box">
        <div className="input-field">
          <input type="number" placeholder="Mobile Number" required />
          <span className="focus"></span>
        </div>
        <div className="input-field">
          <input type="text" placeholder="Email Subject" required />
          <span className="focus"></span>
        </div>
      </div>
      <div className="textarea-field" required>
        <textarea name="message" id="message" cols="30" rows="8" placeholder="Your Message"></textarea>
        <span className="focus"></span>
      </div>
      <div className="btn-box btnx">
        <button className="btn" type="submit">Submit</button>
      </div>
    </form>
    <div className="footer-iconTop">
        <a href="#" onClick={() => handleNavClick('home')}><i className="bx bx-up-arrow-alt"></i></a>
    </div>
  </section>
  )
}

export default Contact