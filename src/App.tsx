import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from './pages/root';
import Navbar from "./components/NavBar";
import SocialButtons from "./components/SocialButtons";
import Consultoria from "./pages/consultoria";
import Design from "./pages/design";
import Multimedia from "./pages/multimedia";
import DesenvolvimentoWeb from "./pages/desenvolvimentoWeb";
import Performance from "./pages/performance";
import ErrorPage from "./pages/error-page";
import BottomFooter from "./components/BottomFooter";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
function App() {

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
    AOS.refreshHard();
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <SocialButtons />
        <Routes>
          <Route path='/' element={<Root />}></Route>
          <Route path='/departamento-de-consultoria' element={<Consultoria />}></Route>
          <Route path='/departamento-de-design' element={<Design />}></Route>
          <Route path='/departamento-de-multimedia' element={<Multimedia />}></Route>
          <Route path='/departamento-de-desenvolvimento-web' element={<DesenvolvimentoWeb />}></Route>
          <Route path='/departamento-de-performance' element={<Performance />}></Route>
          <Route path='/*' element={<ErrorPage />}></Route>
        </Routes>
        <BottomFooter />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
