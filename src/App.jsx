import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { RegisterForm } from './components/RegisterForm'
import { ChannelSection } from './components/ChannelSection'
import { Footer } from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
        <Outlet />
      <RegisterForm />
      <ChannelSection />
      <Footer />
    </>
  )
}

export default App
