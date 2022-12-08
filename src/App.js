import React from "react"
const fs = window.require('fs')
const { app } = window.require('@electron/remote')

function App() {
  return (
    <div className="root">
      <h1>Welcome to your React-Electorn App</h1>
      <li>Check "public/main.js" for comments on the Electron aspect of the app!</li>
      <li>React aspect of the app is in "src"</li>
    </div>
  )
}

export default App
