import React, { useState } from 'react';
import HeaderSection from '../sections/HeaderSection';

const BestSellersView = () => {
    const [isSortingMenuOpen, setSortingMenuOpen] = useState(false);
    const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);

    const toggleSortingMenu = () => {
        setSortingMenuOpen(!isSortingMenuOpen);
        setFilterMenuOpen(false);
    };

    const toggleFilterMenu = () => {
        setFilterMenuOpen(!isFilterMenuOpen);
        setSortingMenuOpen(false);
    };

    return (
        <>
            <HeaderSection />
            <section className="top-menu">
                <div className="container">
                    <div className="angle">
                        <a href=""><i className="fa-solid fa-angle-left"></i></a>
                    </div>
                    <div className="section-title"><h1>Best sellers</h1></div>
                    <div className="bag-icon">
                        <a href=""><i className="fa-light fa-bag-shopping"></i></a>
                        <div className="dollar-circle">$0</div>
                    </div>
                </div>
            </section>

            <section className="sortFilter">
                <div className="container">
                    <div className="filter" onBlur={() => setFilterMenuOpen(false)}>
                        <a
                            href="#"
                            onClick={() => toggleFilterMenu()}
                        >
                            <i className="fa-regular fa-arrow-down-arrow-up"></i>
                        </a>
                        <p>Filters</p>
                        <ul className={isFilterMenuOpen ? 'filter-menu' : 'filter-menu hidden'}>
                            <h3>Kategori</h3>
                            <li><a href="#">Damkläder</a></li>
                            <li><a href="#">Herrkläder</a></li>
                            <li><a href="#">Barnkläder</a></li>
                        </ul>
                    </div>

                    <div className="sorting" onBlur={() => setSortingMenuOpen(false)}>
                        <p>Sorting by</p>
                        <a
                            href="#"
                            onClick={() => toggleSortingMenu()}
                        >
                            <i className="fa-regular fa-angle-down"></i>
                        </a>
                        <ul className={isSortingMenuOpen ? 'sorting-menu' : 'sorting-menu hidden'}>
                            <li><a href="#">Nyast</a></li>
                            <li><a href="#">Lägsta pris</a></li>
                            <li><a href="#">Högsta pris</a></li>
                        </ul>
                    </div>
                </div>
            </section>

        <section className="bestSellersProduct">
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
        </>
    )
}
export default BestSellersView