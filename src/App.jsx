import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayaout'
import HomePage from './pages/HomePage'
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App

