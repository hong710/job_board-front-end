import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateJob from './pages/CreateJob';
import { JobProvider } from './context/JobContext';


function App() {
  return (
    <BrowserRouter>
      <JobProvider>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateJob />} />
        </Routes>
      </JobProvider>
    </BrowserRouter>
    
  );
}

export default App;
