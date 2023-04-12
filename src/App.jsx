import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      {/* ====NavBar===== */}
      <NavBar />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      <Footer />
      {/* ====Footer===== */}
      <ToastContainer />
    </>
  );
}

export default App;
