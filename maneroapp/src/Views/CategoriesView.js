import React, { useState } from 'react';
 
const CategoriesView = () => {
    const [contactPanelOpen, setContactPanelOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    function toggleContactPanel() {
        setContactPanelOpen(!contactPanelOpen);
    }
 
    function closeContactPanel() {
        setContactPanelOpen(false);
    }
 
    async function handleSearch() {
        try {
            const response = await fetch(`https://localhost:7277/api/products/search?term=${searchTerm}`);
            const data = await response.json();
            console.log(data); // This will log the response from the API
        } catch (error) {
            console.error('Error:', error);
        }
    }
 

    function handleInputChange(event) {
        setSearchTerm(event.target.value);
    }
 
    return (
        <section className="top-bar">
            <div className="container">
                <a href="#" className="bar-staggered" onClick={toggleContactPanel}><i className="fa-regular fa-bars-staggered"></i></a>
 
                <div id="contactPanel" style={{ display: contactPanelOpen ? "block" : "none" }}>
                    <button onClick={closeContactPanel} style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'transparent', border: 'none', fontSize: '20px', color: '#fff', cursor: 'pointer' }}>X</button>
                    <h2>Contact us</h2>
                    <div className="location">
                        <span className="location-icon"><i className="fa-regular fa-location-dot"></i></span>
                       
                        <div className="adress">
                            <p >27 Division St, New York,</p>
                            <p className="street">NY 10002, USA</p>
                        </div>
                   
                    </div>
                   
 
                    <div className="email">
                        <span className="email-icon"><i className="fa-regular fa-envelope"></i></span>
                        <div className="email-info">
                            <p>manerosale@mail.com</p>
                            <p className="service-email">manerosupport@mail.com</p>
                        </div>
                    </div>
                    <hr></hr>
 
 
                    <div className="phone-number">
                        <span className="phone-icon"><i className="fa-regular fa-phone-volume"></i></span>
                        <div className="phone-info">
                            <p>+17  123456789</p>
                            <p className="service-phone">+17  987654321</p>
                        </div>
                    </div>
                    <hr></hr>
 
 
                    <div className="order-form">
                        <p>Track your order</p>
                        <form action="/submit" method="post" className="form-container">
                            <div className="form-field-container">
                                <div className="order-number">ORDER NUMBER</div>
                                    <input type="text" className="form-field"/>
                                    <div className="arrow-container">
                                    <i className="fas fa-arrow-right arrow-icon"></i>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
 
                <form className="search-form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                    <div className="relative-search">
                        <input
                            type="search"
                            className="form-control"
                            id="Search"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <button type="submit">
                            <i className="fa-regular fa-magnifying-glass"></i>
                        </button>
                    </div>
                </form>
 
                <div className="bar-icon">
                    <a href="/"><i className="fa-solid fa-house"></i></a>
                    <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                    <a href="signin.html"><i className="fa-regular fa-user"></i></a>
                </div>
 
                <div className="shop-bag"><i className="fa-light fa-bag-shopping"></i></div>
            </div>
            <hr></hr>
        </section>
    )
}
 
export default CategoriesView;