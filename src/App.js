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
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  </>;
}

export default App;
