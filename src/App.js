import './App.css';
import { Aboutme } from './Pages/Aboutme';
import { Contact } from './Pages/Contact';
import { GitStats } from './Pages/GitStats';
import { Home } from './Pages/Home';
import { Navbar } from './Pages/Navbar';
import { Project } from './Pages/Project';
import { Skill } from './Pages/Skill';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Aboutme/>
     <Skill/>
     <Project/>
     <GitStats/>
     <Contact/>
    </div>
  );
}

export default App;
