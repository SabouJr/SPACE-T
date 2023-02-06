import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Galaxy from './Components/Planetes/Galaxy';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="*" element={<Galaxy />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
