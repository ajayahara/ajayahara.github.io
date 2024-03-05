const frontendTechs = [
  { title: "HTML", progress: "90%" },
  { title: "CSS", progress: "80%" },
  { title: "JavaScript", progress: "90%" },
  { title: "React", progress: "90%" },
  { title: "Chakra UI", progress: "85%" },
  { title: "Tailwind CSS", progress: "75%" },
  { title: "Next Js", progress: "75%" },
];
const backendTechs = [
  { title: "Node Js", progress: "90%" },
  { title: "Express Js", progress: "95%" },
  { title: "Mongo DB", progress: "90%" },
  { title: "MySQL", progress: "80%" },
];
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>
      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Frontend Skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              {frontendTechs.map((techs, i) => {
                return (
                  <div className="progress" key={i}>
                    <h3>
                      {techs.title}
                      <span>{techs.progress}</span>
                    </h3>
                    <div className="bar">
                      <span style={{ width: techs.progress }}></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="skills-column">
          <h3 className="title">Backend Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              {backendTechs.map((techs, i) => {
                return (
                  <div className="progress" key={i}>
                    <h3>
                      {techs.title}
                      <span>{techs.progress}</span>
                    </h3>
                    <div className="bar">
                      <span style={{ width: techs.progress }}></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
