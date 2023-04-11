
import './App.css';
import Home from './components/home/Home';
import Register from './components/signup/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={< Register />} />
          <Route path="/succ" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;