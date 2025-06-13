import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import FormBuilder from "./pages/FormBuilder"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/form-builder" element={<FormBuilder />} />
      </Routes>
    </Router>
  )
}

export default App
