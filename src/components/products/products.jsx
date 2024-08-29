import React, { useState, useEffect, useContext } from "react";
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import AppContext from "../../context/AppContext";

function Products() {

    const {products, setProducts} = useContext(AppContext)

    useEffect(() => {

        fetchProducts('microfone').then((response) => {
            setProducts(response);
        })
    }, []);

    console.log(products)

    return ( 

        <section className="products container mx-auto">
            {
                products.map((product) => <ProductCard key={product.id} data={product} />)
            }
        </section>

     );
}

export default Products;