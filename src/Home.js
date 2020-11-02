import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return <div className="home">
        <img className="home__img" src="/Amazon_homepageImg.jpg" alt=""/>
        <div className="home__row">
            <Product
            id="12345"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={4}
            image="/product1_book.jpg"
            />
            <Product
                id="12345"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={4}
                image="/product1_book.jpg"
            />
        </div>
        <div className="home__row">
            <Product
                id="12345"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={4}
                image="/product1_book.jpg"
            />
            <Product
                id="12345"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={4}
                image="/product1_book.jpg"
            />
            <Product
                id="12345"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={4}
                image="/product1_book.jpg"
            />
        </div>
        <div className="home__row">
            <Product
                id="12345"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={4}
                image="/product1_book.jpg"
            />
        </div>
    </div>
}
export default Home