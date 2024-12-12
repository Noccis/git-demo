import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar';

function App() {

  return (
    <>
      <Header />
      <div className='flex'>
        <MainContent />
        <Sidebar />
      </div>
    </>
  )
}

export default App
