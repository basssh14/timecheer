import React, { useState } from "react"
import Landing from "./components/layout/Landing"
import LoginSuccess from "./components/layout/LoginSuccess"

function App() {
  const [disableLoginPage, setDisableLoginPage] = useState(true)
  const changeLoginSuccess = () => {
    setDisableLoginPage(!disableLoginPage)
  }
  return (
    <div className="w-screen h-screen bg-black">
      {disableLoginPage ? (
        <LoginSuccess changeLoginSuccess={changeLoginSuccess} />
      ) : (
        <Landing changeLoginSuccess={changeLoginSuccess} />
      )}
    </div>
  )
}
export default App
