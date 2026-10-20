import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Treatments from './pages/Treatments'
import Consult from './pages/Consult'
import Contact from './pages/Contact'
import Book from './pages/Book'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="treatments" element={<Treatments />} />
        <Route path="cosmetic-consultation" element={<Consult />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
