import React from "react"
import { Catalog } from "./components/Catalog/Catalog"
import { Container } from "./components/Container/Container" 
import { Header } from "./components/Header/Header"
import { Navigation } from "./components/Navigation/Navigation"



export const App = () => {

  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <footer></footer>
    </>
  )
}


