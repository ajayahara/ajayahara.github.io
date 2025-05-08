import SectionHeading from "../common/SectionHeading";

const About = () => {
  return (
    <section
      id="about"
      className="w-full text-[var(--secondaryColor)] pb-6 md:pb-18"
    >
      <SectionHeading title="About" highlight="Me!" />
      <div className="mx-auto flex flex-col xl:flex-row items-center gap-8 px-2 2xl:px-64">
        {/* Profile Image */}
        <div className="md:w-96 md:h-96 w-72 h-72 rounded-full overflow-hidden border-4 border-[var(--primaryColor)] shadow-lg">
          <img
            src="/profile.jpg" // replace with your actual image path
            alt="Ajaya Kumar Behera"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-md md:text-lg leading-relaxed text-justify flex-1">
          <p className="mb-4">
            I’m <strong>Ajaya Kumar Behera</strong>, a passionate and detail-oriented{" "}
            <strong>Full Stack Web Developer</strong> specialized in the{" "}
            <strong>MERN stack</strong>. My background in mathematics, combined
            with over <strong>1200+ hours of coding</strong> and project-based
            learning, has shaped me into a developer who loves solving real-world
            problems through clean, efficient, and scalable code.
          </p>
          <p className="mb-4">
            My journey includes building full-featured applications such as
            e-commerce platforms like <strong>Nykaa</strong> and{" "}
            <strong>JioMart clones</strong>, and tools like a{" "}
            <strong>URL shortener</strong> and a <strong>chatbot</strong> during my
            internship at <strong>Masai School</strong>. I later transitioned into a
            full-time role at <strong>Zeuron AI</strong>, where I expanded my
            experience in modern product development.
          </p>
          <p className="mb-4">
            I'm highly comfortable working with technologies like{" "}
            <strong>React, Node.js, MongoDB, Redux, Chakra UI, Tailwind, and
            TypeScript</strong>. I'm equally effective both independently and in
            collaborative, remote team environments.
          </p>
          <p>
            Whether it’s enhancing UI/UX, optimizing APIs, or launching a
            full-stack product from scratch, I bring energy and precision to every
            line of code I write.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
