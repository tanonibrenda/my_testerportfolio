
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* particle.js */}

      {/* navbar */}

      {/* main page content */}
      <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/about' element={ <About/>}/>
      <Route path='/contact' element={ <Contact/>}/>
      <Route path='/portfolio' element={ <Portfolio/>}/>
      <Route path='/resume' element={ <Resume/>}/>
      <Route path='/skills' element={ <Skills/>}/>
      </Routes>
    </div>
  );
}

export default App;
