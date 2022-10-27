import { useParams } from "react-router-dom";
import products from "../assets/data";
import { Navigate } from "react-router-dom";
import Rating from "../components/Rating";
import Host from "../components/Host.jsx";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Dropdown from "../components/Dropdown";
import { useEffect } from "react";

const SingleProduct = () => {
  useEffect(() =>{
    window.scrollTo(0,0)
  })
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  
  if (product === undefined){
  return <Navigate to="/404" />; 
  }
  
  const { title, location, rating, host, equipments, description, pictures } = product;
    
  return (
    <div className="singleproduct">
      <Slider slides={pictures} />
      <div className="singleproduct__content">
        <div className="singleproduct__informations">
          <h1 className="singleproduct__title">{title}</h1>
          <p className="singleproduct__location">{location}</p>
          <div className="singleproduct__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="singleproduct__rating-and-host">
          <Rating rating={rating} />
          <Host host={host} />
        </div>
      </div>
      <div className="singleproduct__dropdowns">
        <Dropdown title="description" content={description} />
        <Dropdown title="équipement" content={equipments} />
      </div>
    </div>
  );
};

export default SingleProduct;