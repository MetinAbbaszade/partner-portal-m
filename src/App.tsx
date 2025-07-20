import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LoadingSpinner from './components/Loading';

const Home = lazy(() => import('./pages/Home'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Settings = lazy(() => import('./pages/Settings'));
const Orders = lazy(() => import('./pages/Orders'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="settings" element={<Settings />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
