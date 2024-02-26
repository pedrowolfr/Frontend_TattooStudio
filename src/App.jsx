import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import GallerySection from './components/GallerySection'
import Artist from './components/Artist'
import Skills from './components/Skills'
//import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

export function App() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
        <Header />
        <Hero />
        <About />
        <GallerySection />
        <Artist />
        <Skills />
        
        <Contact />
        <Footer />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
