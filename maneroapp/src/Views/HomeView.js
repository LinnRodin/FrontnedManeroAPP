import React from 'react'
import HeaderSection from '../sections/HeaderSection';
import MainMenuSection from '../sections/MainMenuSection';
import ShowcaseSection from '../sections/ShowCaseSection';
import ShowcaseSection2 from '../sections/ShowCaseSection2';
import FeaturedSection from '../sections/FeaturedSection';
import FooterSection from '../sections/FooterSection';

const HomeView = () => {
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
                    <div className="product-card">
                        <div className="card">
                            <ul className="card-menu">
                                <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                            </ul>
                            <div className="card-background"></div>
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
            
                            <h5>Purple sneakers</h5>
                            <p className="price">$35.00</p>
            
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="card">
                            <ul className="card-menu">
                                <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                            </ul>
                            <div className="card-background"></div>
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
            
                            <h5>Purple sneakers</h5>
                            <p className="price">$35.00</p>
            
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="card">
                            <ul className="card-menu">
                                <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                            </ul>
                            <div className="card-background"></div>
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
            
                            <h5>Purple sneakers</h5>
                            <p className="price">$35.00</p>
            
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="card">
                            <ul className="card-menu">
                                <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                            </ul>
                            <div className="card-background"></div>
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
            
                            <h5>Purple sneakers</h5>
                            <p className="price">$35.00</p>
            
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="card">
                            <ul className="card-menu">
                                <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                            </ul>
                            <div className="card-background"></div>
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
            
                            <h5>Purple sneakers</h5>
                            <p className="price">$35.00</p>
            
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="card">
                            <ul className="card-menu">
                                <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                            </ul>
                            <div className="card-background"></div>
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
            
                            <h5>Purple sneakers</h5>
                            <p className="price">$35.00</p>
            
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="card">
                            <ul className="card-menu">
                                <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                            </ul>
                            <div className="card-background"></div>
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
            
                            <h5>Purple sneakers</h5>
                            <p className="price">$35.00</p>
            
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="card">
                            <ul className="card-menu">
                                <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                            </ul>
                            <div className="card-background"></div>
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
            
                            <h5>Purple sneakers</h5>
                            <p className="price">$35.00</p>
            
                        </div>
                    </div>
                </div>
            </section>

          <ShowcaseSection2/>
          <FeaturedSection/>
          <FooterSection/>

      
      </>

  )
}

export default HomeView