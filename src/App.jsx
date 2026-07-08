import Navbar from './components/Navbar';
import './App.css'
import Manager from './components/manager';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow'>
        <Manager />
      </div>
      
      <Footer />
      </div>
    </>
  )
}

export default App