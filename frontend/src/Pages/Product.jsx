import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/ReletedProducts";

const Product = () =>{
    const {AllProducts} = useContext(ShopContext);
    const {productId} = useParams();

    const product = AllProducts.find((e)=> e.id === Number(productId))
    return(
        <div>
            <BreadCrum  product= {product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <RelatedProducts/>
        </div>
    );
}

export default Product;