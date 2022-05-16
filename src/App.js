import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { publicRoute } from './routes/publicRoute';
import './App.css';

function App() {
  return (

    <Navbar>
      <Routes>
        {
          publicRoute.map(({ path, Component }) => <Route path={path} element={<Component />} />)
        }
      </Routes>
    </Navbar>

  );
}

export default App;
