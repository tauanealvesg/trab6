

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


import { Outlet } from 'react-router-dom';


import NavBar from "../src/componets/NavBar.jsx"

function App() {

    return (
      <div className="App">
        
      <NavBar/>
      
      <div className='corpin'>
  
      <Outlet/>
  
      </div>
      </div>
    )
}

export default App
