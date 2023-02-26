import React from "react"
import { Provider } from "react-redux"
import { Catalog } from "./components/Catalog/Catalog"
import { Container } from "./components/Container/Container" 
import { Header } from "./components/Header/Header"
import { ModalDelivery } from "./components/ModalDelivery/ModalDelivery"
import { Navigation } from "./components/Navigation/Navigation"
import { store } from "./store/index.js"



export const App = () => {

  return (
    <Provider store={store}>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <footer></footer>
      <ModalDelivery />
    </Provider>
  )
}


