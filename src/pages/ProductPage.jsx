import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

const ProductPage = ({ products }) => {

    const { id } = useParams()

    useEffect(() => {
        products.map((item) => {
            if(item.permalink === id){
                console.log("dados")
            } else{
                console.log("errou")
            }
        })
    },[])

  return (
    <div>ProductPage</div>
  )
}

export default ProductPage