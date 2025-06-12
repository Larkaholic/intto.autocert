import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import CertificateBuilder from './pages/CertificateBuilder'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/certificate-builder" element={<CertificateBuilder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
