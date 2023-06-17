import {Routes, Route} from 'react-router-dom'
import './App.css';
import {
  LandingPage,
  ProjectManager
} from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/project-manager' element={<ProjectManager/>}/>
    </Routes>
  );
}

export default App;
