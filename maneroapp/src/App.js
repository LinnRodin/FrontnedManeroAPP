import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.min.css';
import CategoriesView from './views/CategoriesView';
import GridCategoriesView from './views/GridCategories';
import DownBarCategories from './views/DownBarCategories';
import BestSellersView from './views/BestSellersView';

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
