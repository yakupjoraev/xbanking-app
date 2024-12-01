import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import StakeEarn from './components/StakeEarn/StakeEarn'
import './index.css'

function App() {

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />

        <div className='flex-grow'>
          <Dashboard title="Your xBanking Dashboard" />
          <StakeEarn title="Stake & Earn with xBanking" />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
