import './App.min.css';
import CategoriesView from './View/CategoriesView';
import DownBarCategories from './View/DownBarCategories';
import GridCategories from './View/GridCategories';


function App() {
  return (
    <>
      <CategoriesView/>
      <GridCategories/>
      <DownBarCategories/>
    </>
  );
}

export default App;

