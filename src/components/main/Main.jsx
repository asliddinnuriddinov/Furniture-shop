import React, { useEffect, useState, useMemo } from 'react';
import './Main.scss';
import Container from '../../utils/Utils';
import data from '../../Data.json';
import { useNavigate } from 'react-router-dom';
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

const Main = () => {
    const [allCategory, setAllCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [products, setProducts] = useState(data);
    const navigate=useNavigate()

    useEffect(() => {
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setAllCategory(uniqueCategories);
    }, []);

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'all') {
            return products;
        }
        return products.filter(item => item.category === selectedCategory);
    }, [selectedCategory, products]);

    function filterCategory(category) {
        setSelectedCategory(category);
    }

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
            <ul className='categories'>
                <li onClick={() => filterCategory('all')} className={selectedCategory === 'all' ? 'activeCategory' : ''}>All Products</li>
                {allCategory.map((category, index) => (
                    <li
                        key={index}
                        className={selectedCategory === category ? 'activeCategory' : ''}
                        onClick={() => filterCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
            <div className="products">
                {filteredProducts.map((product, index) => (
                    <div onClick={e=>navigate(`/product-view/${product.id}`)} key={index} className="product__item">
                        <img src={displayImage(product.id)} alt={product.name} />
                        <h4>{product.name}</h4>
                        <strong>$ {product.price}</strong>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Main;
