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



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/brendaneich' element={<BrendanEich/>}/>
        <Route path='/guidoVanrossum' element={<GuidoVanRossum/>}/>
        <Route path='/mitchellbaker' element={<MitchellBaker/>}/>
        <Route path='/yanzhu' element={<YanZhu/>}/>
        <Route path='/markzuckerberg' element={<MarkZuckerberg/>}/>
        <Route path='*' element={<Errors/>}/>
      </Routes>
    </Router>
  );
}

export default App;
