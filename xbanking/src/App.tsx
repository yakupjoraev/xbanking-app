import { useState } from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import StakeEarn from './components/StakeEarn/StakeEarn'
import LoginModal from './components/Modal/LoginModal'
import './index.css'

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header onDashboardClick={() => setIsLoginModalOpen(true)} />

        <div className='flex-grow'>
          <Dashboard title="Dashboard" />
          <StakeEarn title="Stake & Earn" />
        </div>

        <Footer />

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      </div>
    </>
  )
}

export default App
