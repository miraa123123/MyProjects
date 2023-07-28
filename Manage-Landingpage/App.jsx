import React, { useState } from "react"
import Logo from "./images/Logo.svg"
import Menu from "./images/icon-hamburger.svg"
import Header from "./Components/Header"
import MainContent from "./Components/MainContent"
import Section2 from "./Components/Section2"
import Card from "./Components/Card"
import Card2 from "./Components/Card2"
import GetStarted from "./Components/GetStarted"
import Footer from "./Components/Footer"


function App() {

  return (
    <>
      <Header />
      <MainContent />

     <div className="DIV">
      <Section2 />
      <Card />
      </div> 

      <div className="title">
        <h1>What they've said</h1>
      </div>
      <Card2 />

      <GetStarted />
      <Footer />
    </>
  )
}

export default App