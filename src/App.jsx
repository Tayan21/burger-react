import React from "react"
import { Container } from "./components/Container/Container" 
import { Header } from "./components/Header/Header"



export const App = () => {

  return (
    <>
      <Header />
      <main>
        <nav>
          <Container className="navigation_container" />
        </nav>
        <section>
          <Container />
        </section>
      </main>
      <footer></footer>
    </>
  )
}


