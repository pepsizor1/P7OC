import React from "react";
import { Link } from "react-router-dom";

import image from "../assets/banner.png";
import Herobanner from "../components/HeroBanner";
import products from "../assets/data.json";
import Thumbnails from "../components/Thumbnails";

const slogan = "Chez vous, partout et ailleurs"

const Products = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <Herobanner image={image} title={slogan} />
      </div>{" "}
      <section className="home__products">
        {products.map((product) => {
          return (
            <article className="testflex" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Thumbnails image={product.cover} title={product.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};
export default Products;