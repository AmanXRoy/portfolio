import { Route, Routes , useLocation} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

function App() {
  const personName = "Aman Roy";
  const personRole = "FrontEnd Developer";
  const personSummaryStart = "I'm a passionate ";
  const personSummaryEnd = " from India";
  return (
  <>
  <Routes>
    <Route path='/'  element={ <Header name={personName} summaryStart={personSummaryStart} role={personRole} summaryEnd={personSummaryEnd}></Header>}></Route>
    <Route path='/about' element={ <About/>}></Route>
    <Route path='/resume' element={ <Resume/>}></Route>
    <Route path='/portfolio' element={ <Portfolio/>}></Route>
    <Route path='/services' element={ <Services/>}></Route>
    <Route path='/contact' element={ <Contact/>}></Route>
  </Routes>
   
  </>
  );
}

export default App;
