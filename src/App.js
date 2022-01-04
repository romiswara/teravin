import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './screen/Home'
import Detail from './screen/Detail'
import Form from './screen/Form'
function App() {


 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="form" element={<Form />} />
      </Routes>
    
    </div>
  );
}

export default App;
