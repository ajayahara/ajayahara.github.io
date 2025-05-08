import Navbar from "./components/app/Navbar";
import Home from "./components/app/Home";
import About from "./components/app/About";
import Skill from "./components/app/Skill";
import Project from "./components/app/Project";
// import Education from "./components/app/Education";
// import Experience from "./components/app/Experience";
import Contact from "./components/app/Contact";
import Github from "./components/app/Github";
import TopMover from "./components/common/TopMover";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="w-screen h-screen scroll-hide overflow-y-scroll bg-[var(--bgSecColor)]">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Github />
      {/* <Education /> */}
      {/* <Experience /> */}
      <Contact />
      <TopMover/>
      <ToastContainer position="bottom-right"/>
    </div>
  );
};

export default App;
