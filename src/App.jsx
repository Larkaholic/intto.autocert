import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import FormBuilder from "./pages/FormBuilder"
import CertificateBuilder from "./pages/CertificateBuilder"
import FeedbackResults from "./pages/FeedbackResuls"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="/certificate-builder" element={<CertificateBuilder />} />
        <Route path="/feedback-results" element={<FeedbackResults />} />
      </Routes>
    </Router>
  )
}

export default App
