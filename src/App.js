import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Planet from './Components/Planetes/Planet';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/planetes" element={<Planet />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
