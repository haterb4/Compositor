import {Routes, Route} from 'react-router-dom'
import './App.css';
import {
  LandingPage,
  ProjectManager,
  CreationEditor
} from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/project-manager' element={<ProjectManager/>}/>
      <Route path='/creation' element={<CreationEditor/>}/>
    </Routes>
  );
}

export default App;
