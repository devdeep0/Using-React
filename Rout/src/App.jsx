import { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Provider } from 'react-redux'
import store from './store/Store/Store'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
     <Header/>
     <Outlet/>
     <Footer/>
     </Provider>
     
    </>
  )
}

export default App
