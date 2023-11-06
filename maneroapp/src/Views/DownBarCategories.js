import React from 'react'

const DownBarCategories = () => {
  return (
    <section className="down-bar">
        <div className="container">
            <div className="bar-icon">
                <a href="/"><i className="fa-solid fa-house"></i></a>
                <a href="search.html"><i className="fa-regular fa-magnifying-glass"></i></a>
                <a href="shopping.html"><i className="fa-light fa-bag-shopping"></i></a>
                <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
                <a href="signup.html"><i className="fa-regular fa-user"></i></a>
            </div>
        </div>
    </section>
  )
}

export default DownBarCategories