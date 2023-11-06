import React from 'react'

const HeaderSection = () => {
    return (
    <header className="header">
        <div className="container">
            <div className="logo">
                <div className="circle-outer">
                    <div className="circle-inner">
                        <a href="/"><h1>Manero</h1></a>
                    </div>
                </div>
            </div>
            <div className="menu-links">
                <span className="links">
                    <a href="/">Home</a>
                    <a href="categories">Categories</a>
                    <a href="bestsellers">Products</a>
                    <a href="contact">Contacts</a>
                </span>
            </div>
            <div className="header-icon">
                <div className="icons"><a href=""><i className="fa-light fa-house"></i></a></div>
                <div className="icons"><a href=""><i className="fa-light fa-user"></i></a></div>
                <div className="icons"><a href=""><i className="fa-light fa-heart"></i></a></div>
                <div className="bag-icon">
                    <a href=""><i className="fa-light fa-bag-shopping"></i></a>
                    <div className="dollar-circle">$0</div>
                </div>
            </div>
        </div>
    </header>
    )
}
export default HeaderSection