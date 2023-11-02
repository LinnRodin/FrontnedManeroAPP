import CategoriesView from './Views/CategoriesView';
import GridCategoriesView from './Views/GridCategories';
import DownBarCategories from './Views/DownBarCategories';
import FooterSection from './sections/FooterSection';

export function CategoriesPage() {
  return (
    <>
    
      <CategoriesView />
      <GridCategoriesView />
      <DownBarCategories />
      <FooterSection/>


    </>

  );
}
