import React, { useState, useEffect } from 'react';
import HeaderSection from '../sections/HeaderSection';
import MainMenuSection from '../sections/MainMenuSection';
import ShowcaseSection from '../sections/ShowCaseSection';
import ShowcaseSection2 from '../sections/ShowCaseSection2';

const HomeView = () => {
    const [bestSellers, setBestSellers] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchBestSellers  = async () => {
            try {
                const response = await fetch('https://localhost:7277/api/products');
                const data = await response.json();
                const limitedProducts = data.content.slice(0, 8);
                setBestSellers(limitedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        const fetchFeaturedProducts = async () => {
            try {
                const response = await fetch('https://localhost:7277/api/products');
                const data = await response.json();
                setFeaturedProducts(data.content.slice(0, 4));
            } catch (error) {
                console.error('Error fetching featured products:', error);
            }
        };

        fetchBestSellers();
        fetchFeaturedProducts();
    }, []);


  return (
      <>
          <HeaderSection />
          <MainMenuSection />
          <ShowcaseSection/>

          <section className="bestSellersProduct">
                <div className='container' style={{ marginBottom: '60px', marginTop: '30px', justifyContent: 'space-between' }}>
                    <h1>Best Sellers</h1>
                    <a className="menu-link" href="/bestsellers">view all</a>
                </div>
                <div className="container">
                    {bestSellers.map((product, index) => (
                        <div className="product-card" key={index}>
                            <div className="card">
                                <ul className="card-menu">
                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                                </ul>
                                <div className="card-background">
                                        <img src={product.imageUrl}/>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <span>(3)</span>
                                </div>

                                <h5>{product.name}</h5>
                                <p className="price">${product.price.toFixed(2)}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

          <ShowcaseSection2/>
          <section className="bestSellersProduct">
                <div className='container' style={{ marginBottom: '60px', marginTop: '30px', justifyContent: 'space-between' }}>
                    <h1>FEATURED PRODUCTS</h1>
                    <a className="menu-link" href="/bestsellers">view all</a>
                </div>
                <div className="container">
                    {featuredProducts.map((product, index) => (
                        <div className="product-card" key={index}>
                            <div className="card">
                                <ul className="card-menu">
                                    <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                                </ul>
                                <div className="card-background">
                                        <img src={product.imageUrl}/>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <span>(3)</span>
                                </div>

                                <h5>{product.name}</h5>
                                <p className="price">${product.price.toFixed(2)}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

      
      </>

  )
}

export default HomeView