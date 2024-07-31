import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NavBarComponent from './Components/NavBarComponent';
import FooterComponent from './Components/FooterComponent';
import DestinationDetailsPage from './Pages/DestinationDetailsPage';
import CategoriePage from './Pages/CategoriePage';
import CategorieDetailsPage from './Pages/CategorieDetailsPage';
import ClientPage from './Pages/ClientPage';
import ClientDetailsPage from './Pages/ClientDetailsPage';
import ReservationPage from './Pages/ReservationPage';
import ReservationDetailsPage from './Pages/ReservationDetailsPage';
import LoginPage from './Pages/LoginPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return <>
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/destination/:id' element={<DestinationDetailsPage />} />
        <Route path='/categories' element={<CategoriePage />} />
        <Route path='/categorie/:id' element={<CategorieDetailsPage />} />
        <Route path='/clients' element={<ClientPage />} />
        <Route path='/client/:id' element={<ClientDetailsPage />} />
        <Route path='/reservations' element={<ReservationPage />} />
        <Route path='/reservation/:id' element={<ReservationDetailsPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <FooterComponent />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      </BrowserRouter>
      
  </>;
}

export default App;
