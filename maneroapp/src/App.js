import './App.min.css';
import './View/CategoriesView';
import './View/GridCategoriesView';
import'./View/DownBarCategories';


function App() {
  return (
    <>
       <CategoriesView/>
       <GridCategoriesView/>
       <DownBarCategories/> 
    </>
  );
}

export default App;

