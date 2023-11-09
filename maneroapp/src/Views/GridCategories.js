import React, { useState, useEffect } from 'react';
 
const GridCategories = () => {
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    // Fetch categories from your API
    fetch('https://localhost:7277/api/products/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data.content); // Set the retrieved categories in state
      })
      .catch(error => console.error('Error:', error));
  }, []); // Empty dependency array means this effect runs only once
 
  return (
    <section className="categories">
        <div className="container">
            <div className="categories-bar">
                <a href="home.html">MEN</a>
                <a href="man.html">WOMEN</a>
                <a href="man.html">KIDS</a>
                <a href="man.html">ACCESSORIES</a>
            </div>
            <div className="grid-categories">
                {Array.isArray(categories) ? (
                    categories.map(category => (
                        <div key={category.name} className="items">
                            <a href="" className="item">
                                {category.name}
                            </a>
                        </div>
                    ))
                ) : (
                    <p>Loading categories...</p>
                )}
          </div>
        </div>
        <hr></hr>
  </section>
  )
}
 
export default GridCategories