import React, { useEffect, useState } from 'react'
import './App.css'
import Topbar from './Components/Topbar/Topbar'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Loading from './Components/Loading/Loading'
import Footer from './Components/Footer/Footer'

export default function App() {

  const [showLoading, setShowLoading] = useState(true)
  const [showComponents, setShowComponents] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowLoading(false)
      setShowComponents(true)
    }, 1800)
    return () => clearTimeout(timeOut)
  }, [])

  return (
    <>
      <div className={`preload ${showLoading ? '' : 'loaded'}`} data-preaload>
        <div className="circle"></div>
        <p className="text">Zurvan</p>
      </div>
      {
        showComponents ? (
          <>
            <Topbar />
            <Header />
            <Main />
            <Footer />
          </>
        ) : (
          <>
          </>
        )
      }

    </>


  )
}
