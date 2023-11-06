import React from 'react'


const FeaturedSection = () => {
    return (

<section className="shop-by-category">
    
        <div className="container">
              <div className="section-title">
                <h1>FEATURED PRODUCTS</h1>
                <a className="menu-link" href="/products">view all</a>                           
            </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    <div className="new-arrivals">
                        <div className="card h-100">
                        <ul className="card-menu">
                            <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                        </ul>
                           
                       
                                
                        </div>

                            <div className="card-body">
                                <h5 className="card-title">Summer dress</h5>                     
                                <p className="card-old-price">$42.89</p>

                                <div className="d-flex justify-content-between align-items-center w-100">
                                    
                                        <div className="text-theme">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                </div>
                            </div>
                    </div>

                    <div className="new-arrivals">
                        <div className="card h-100">
                        <ul className="card-menu">
                            <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                        </ul>
                           
                       
                               
                        </div>

                            <div className="card-body">
                                <h5 className="card-title">Shoulder bag</h5>                     
                                <p className="card-old-price">$38.30</p>

                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <p className="card-discount-price">$30.00</p>
                                        <div className="text-theme">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                </div>
                            </div>
                </div>
                                  
                    <div className="new-arrivals">
                        <div className="card h-100">
                        <ul className="card-menu">
                            <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa-light fa-bag-shopping"></i></a></li>
                        </ul>
                           
                       
                                
                        </div>

                            <div className="card-body">
                                <h5 className="card-title">Denim</h5>                     
                                <p className="card-old-price">$54.96</p>

                                <div className="d-flex justify-content-between align-items-center w-100">
                                        <div className="text-theme">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
        
            </section>
            )
}
export default FeaturedSection