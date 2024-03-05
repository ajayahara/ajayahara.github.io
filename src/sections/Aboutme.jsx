
const Aboutme = () => {
  return (
    <section className="about" id="about">
        <h2 className="heading">About <span>Me</span></h2>
        <div className="about-img">
          <img src="profile.JPG" alt="aboutme-img" />
          <span className="circle-spin"></span>
        </div>
        <div className="about-content">
          <h3>Fullstack Developer</h3>
          <p>Greetings, I&apos;m Ajaya Kumar Behera, a skilled web developer proficient in crafting dynamic web applications using HTML, CSS, JavaScript, and React.js. Passionate about exploring diverse web development tools, I thrive in collaborative environments. With a proven track record, including a 6-month internship at Masai School, where I developed a URL shortener and a chatbot, I am an adept learner and a valuable team player. I am currently actively seeking job opportunities and welcome inquiries. For further discussion, please feel free to reach out to me using the contact information below.</p>
        </div>
        <div className="btn-box btnx">
          <a href="#" className="btn">Read More</a>
        </div>
      </section>
  )
}

export default Aboutme