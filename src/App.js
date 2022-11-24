import './App.css';
import { AllRoutes } from './AllRoutes/AllRoutes';
import { Navbar } from './AllRoutes/Navbar';

function App() {
  return (
    <div className="App">
     <div>
      <Navbar/>
     </div>
     <div>
      <AllRoutes/>
     </div>
    </div>
  );
}

export default App;
