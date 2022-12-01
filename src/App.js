import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Errors from './components/Errors';
import MarkZuckerberg from './components/MarkZuckerberg';
import BrendanEich from './components/BrendanEich'
import GuidoVanRossum from './components/GuidoVanRossum'
import MitchellBaker from './components/MitchellBaker'
import YanZhu from './components/YanZhu'
import { lazy, Suspense } from 'react';




function App() {
  return (
    <Router>
      <Suspense fallback={<h1>...Cargando</h1>}>  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/brendaneich' element={<BrendanEich/>}/>
          <Route path='/guidoVanrossum' element={<GuidoVanRossum/>}/>
          <Route path='/mitchellbaker' element={<MitchellBaker/>}/>
          <Route path='/yanzhu' element={<YanZhu/>}/>
          <Route path='/markzuckerberg' element={<MarkZuckerberg/>}/>
          <Route path='*' element={<Errors/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
