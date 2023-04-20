import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Orders from './pages/orders/Orders'
import Sidebar from './components/sidebar/Sidebar'
import AddOrder from './components/addOrder/addOrder'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Routes>
    //       {/* <Route path='/' element={<Home />} /> */}
    //       <Route exact path='orders' element={<Orders />} />
    //     </Routes>
    //     <Navbar />
    //     <div className='container'>
    //       <Sidebar />
    //       <Orders />
    //     </div>
    //   </div>
    // </BrowserRouter>

    <BrowserRouter>
      <Navbar />
      <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/orders' element={<Orders />} />
        <Route exact path='/addorder' element={<AddOrder />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
