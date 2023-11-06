import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.min.css';
import HomeView from './Views/HomeView';
import BestSellersView from './Views/BestSellersView';
import { CategoriesPage } from './CategoriesPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/bestsellers' element={<BestSellersView />} />
        <Route path='/categories' element={<CategoriesPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
