import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="ui grid container">
                <div className="four column wide" key={id}>
                    <Link to={`/product/${id}`}>
                        <div className="ui link card">
                            <div className="card">
                                <div className="column lp">
                                    <img className="ui fluid image" src={image} />
                                </div>
                                <div className="content">
                                    <div className="column rp">{title}</div>
                                    <div className="meta price">$ {price}</div>
                                    <div className="meta">{category}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    })

    return <>{renderList}</>;
};

export default ProductComponent;