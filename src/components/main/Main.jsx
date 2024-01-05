import React, { useEffect, useState, useMemo } from 'react';
import './Main.scss';
import Container from '../../utils/Utils';
import data from '../../Data.json';
import { useNavigate } from 'react-router-dom';

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
                        <img src={product.img} alt={product.name} />
                        <h4>{product.name}</h4>
                        <strong>$ {product.price}</strong>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Main;
