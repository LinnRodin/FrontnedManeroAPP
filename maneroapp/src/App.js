import './App.min.css';
import CategoriesView from './View/_CategoriesView';
import GridCategoriesView from './View/_GridCategoriesView';
import DownBarCategories from './View/_DownBarCategories';

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

