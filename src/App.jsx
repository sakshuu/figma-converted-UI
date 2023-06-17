import React from 'react'
import { Associate, Blogs, Footer, Landing, Mynavbar, Offers, Services, Success } from './components'
import "./assets/css/index.css"

const App = () => {
  return  <>
  <Mynavbar/>
  <Landing/>
  <Associate/>
  <Services/>
  <div>hello</div>
  <Blogs/>
  <Offers/>
  <div>hello</div>
  <Success/>
  <div>hello</div>
  <Footer/>
  </>
}

export default App