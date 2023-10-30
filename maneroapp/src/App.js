import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.min.css';
import CategoriesView from './Views/CategoriesView';
import GridCategoriesView from './Views/GridCategories';
import DownBarCategories from './Views/DownBarCategories';
import BestSellersView from './Views/BestSellersView';

function CategoriesPage() {
  return (
    <>
       <CategoriesView/>
       <GridCategoriesView/>
       <DownBarCategories/> 
    </>
  );
}

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
