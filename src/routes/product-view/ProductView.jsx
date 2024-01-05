import React from 'react'
import "./ProductView.scss"
import ProductInfo from '../../components/product-info/ProductInfo'
import Feedback from '../../components/feedback/Feedback'

const ProductView = () => {

  return (
    <div className='product-view'>
        <ProductInfo/>
        <Feedback/>
    </div>
  )
}

export default ProductView