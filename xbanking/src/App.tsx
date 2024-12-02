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
          <Dashboard title="Dashboard" />
          <StakeEarn title="Stake & Earn" />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
