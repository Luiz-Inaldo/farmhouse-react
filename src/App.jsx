import { Link, Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { RegisterForm } from './components/RegisterForm'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <RegisterForm />
    </>
  )
}

export default App
