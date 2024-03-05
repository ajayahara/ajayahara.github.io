const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I &apos;m <span>Ajaya Kumar</span>
        </h1>
        <div className="text-animate">
          <h3>Fullstack Web Developer</h3>
        </div>
        <p>
          A Fullstack Web Developer with 1200+ hour coding experience working
          with Javascript, Html, CSS & Rect to deliver exceptional customer
          experinces. Adept at contributing to a highly collaborative work
          environment, finding solutions and determining customer satisfaction.
        </p>
        <div className="btn-box">
          <a
            className="btn"
            download
            href="Ajaya-Kumar-Behera-Resume.pdf"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1zTgZBMP6AiSJeX31mpRlHNI_RgJSNO3o/view?usp=sharing",
                "_blank"
              );
            }}
          >
            Resume<i className="bx bxs-down-arrow-circle"></i>
          </a>
          <a href="#contact" className="btn">
            Let &apos;s Talk
          </a>
        </div>
      </div>
      <div className="home-sci">
        <a href="#">
          <i className="bx bxl-facebook-circle"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/https://www.linkedin.com/in/ajaya-kumar-behera-a56549237/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>{" "}
        </a>
        <a href="https://github.com/ajayahara" target="_blank" rel="noreferrer">
          <i className="bx bxl-github"></i>
        </a>
      </div>
      <img src="logo.png" alt="" className="homelogo" />
    </section>
  );
};

export default Home;
