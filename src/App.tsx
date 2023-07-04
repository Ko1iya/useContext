import { useContext, useState, createContext } from "react"
import Button from "./components/Button/Button"
import Counter from "./components/Counter/Counter"

import { AppContext, AppState } from "./CountContext"

function App() {
  return (
    <AppState>
      <div className='App'>
        <h1 style={{ padding: 0, margin: 0 }}>Use Context</h1>
        <Counter />
      </div>
    </AppState>
  )
}

export default App
