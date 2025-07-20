import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Layout from './pages/Layout';
import Settings from './pages/Settings';
import Orders from './pages/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Blogs />} />
          <Route path="settings" element={<Settings />} />
          <Route path="orders/all" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
