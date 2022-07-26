import { Route, Routes } from 'react-router-dom';
import Employees from './pages/Employees';
import Login from './pages/Login';
import Register from './pages/Register';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Router