import './App.css'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import RootRoute from './routes'
import ScrollToTop from './scrollToTop/ScrollToTop'

function App() {
  return (
    <>
    <ScrollToTop/>
    <Nav/>
    <RootRoute/>
    <span className='footer__line'></span>
    <Footer/>
    </>
  )
}

export default App
