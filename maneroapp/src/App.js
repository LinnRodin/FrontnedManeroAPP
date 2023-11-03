import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.min.css';
import BestSellersView from './Views/BestSellersView';
import { CategoriesPage } from './CategoriesPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<BestSellersView />} />
        <Route path='/categories' element={<CategoriesPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
