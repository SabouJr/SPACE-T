import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="*" element={<main><h1>404 Not Found</h1></main>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
