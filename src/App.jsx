import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import './App.css'
import Home from './components/Home';

function App() {

  return (
    <>
      <Router>
        <div className="w-full h-full">
          <Routes>
            <Route path='/' element={<Home to="/page/:page"/>} />
            <Route path='/page/:page' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
