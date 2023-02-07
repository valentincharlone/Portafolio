import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Header from '../components/layout/Header'
import About from '../components/About'
import LandingPage from '../components/LandingPage'
import Technologies from '../components/Technologies'
import Proyects from '../components/Proyects'
import Contact from '../components/Contact'
import Footer from '../components/layout/Footer'
import Error from '../components/Error'

export const MyRoutes = () => {
  return (
    <BrowserRouter>

      <Header />

          <section className='content'>
              <Routes>
                  <Route path='/' element={<Navigate to='/landingPage' />} />
                  <Route path='/landingPage' element={<LandingPage />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/technologies' element={<Technologies />} />
                  <Route path='/proyects' element={<Proyects />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='*' element={<Error />} />
              </Routes>
          </section>
      <Footer />
    </BrowserRouter>
  )
}
