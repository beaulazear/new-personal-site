import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageNavLinks from './components/PageNavLinks';
import Home from './components/Home';
import AnimalCarePage from './components/AnimalCareInfo';
import Resume from './components/Resume';
import Programming from './components/Programming';

function App() {
  return (
    <div>
      <PageNavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animal_care" element={<AnimalCarePage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/programming" element={<Programming />} />
      </Routes>
    </div>
  );
}

export default App;
