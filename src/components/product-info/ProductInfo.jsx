import React, { useState } from 'react'
import "./ProductInfo.scss"
import { useNavigate, useParams } from 'react-router-dom'
import data from "../../Data.json"
import Container from '../../utils/Utils'
import { FaPlus,FaMinus } from "react-icons/fa";
import hero1 from "../../assets/hero-1.png"
import hero2 from "../../assets/hero-2.png"
import hero3 from "../../assets/hero-3.png"
import { useDispatch } from 'react-redux'
import img1 from "../../assets/img-1.png"
import img2 from "../../assets/img-2.png"
import img3 from "../../assets/img-3.png"
import img4 from "../../assets/img-4.png"
import img5 from "../../assets/img-5.png"
import img6 from "../../assets/img-6.png"
import img7 from "../../assets/img-7.png"
import img8 from "../../assets/img-8.png"
import img9 from "../../assets/img-9.png"
import img10 from "../../assets/img-1.png"
import img11 from "../../assets/img-11.png"
import img12 from "../../assets/img-12.png"

const ProductInfo = () => {
    const {id}=useParams()
    const product=data.filter(x=>x.id==id)[0]
    const [count,setCount]=useState(1)
    const navigate=useNavigate()
    const relatedProduct=data.filter(x=>x.category==product.category&&x.id!=product.id)[0]
    const dispatch=useDispatch()

    function displayImage(ind){
        switch(ind-1){
            case 0:
                return img1
                case 1:
                    return img2
                    case 2:
                        return img3
                        case 3:
                            return img4
                            case 4:
                                return img5
                                case 5:
                                    return img6
                                    case 6:
                                        return img7
                                        case 7:
                                            return img8
                                            case 8:
                                                return img9
                                                case 9:
                                                    return img10
                                                    case 10:
                                                        return img11
                                                        case 11:
                                                            return img12
        }
    }
  return (
    <Container>
    <div className='product-info'>
    <div className="product-info__left">
        <img src={displayImage(product.id)} alt="" />
    </div>
    <div className="product-info__right">
        <h2>{product.name}</h2>
        <strong>${product.price*count}.00</strong>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum dolor enim inventore provident aspernatur! Earum a deserunt excepturi incidunt nihil! Officiis libero sed quas necessitatibus nihil cupiditate alias quaerat repellat maxime, expedita suscipit saepe tenetur obcaecati adipisci optio ea?</p>
        <div className="add-to-cart">
            <div className="counter">
                <button onClick={e=>count>1?setCount(count-1):null}><FaMinus/></button>
                <p>{count}</p>
                <button onClick={e=>{setCount(count+1);}}><FaPlus/></button>
            </div>
            <button onClick={e=>dispatch({type:"ADD_TO_CART",payload:product})} className='add-to-cart-btn'>ADD TO CART</button>
        </div>
        <p>Category: <span>{product.category}</span></p>
    </div>
    </div>

    <div className="product__info__hero">
        <h2>Making Home A Happy Place</h2>
        <span></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas diam. Placerat orci nulla pellentesque</p>
        <div className="product__info__hero-gallery">
            <div className="hero__gallery-item-1">
                <img src={hero1} alt="" />
            </div>
            <div className="hero__gallery-item-2">
                <img src={hero2} alt="" />
            </div>
            <div className="hero__gallery-item-3">
                <img src={hero3} alt="" />
            </div>
        </div>
    </div>

    <div className="related__product">
        <h2>RELATED TO CATEGORY "{product.category}"</h2>
        <span></span>
        <div className="products">
            <div onClick={e=>navigate(`/product-view/${relatedProduct.id}`)}className="product__item">
                <img src={displayImage(relatedProduct.id)} alt={relatedProduct.name} />
                <h4>{relatedProduct.name}</h4>
                <strong>$ {relatedProduct.price}</strong>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default ProductInfo