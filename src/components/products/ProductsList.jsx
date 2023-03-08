import React from 'react';
import { ProductItem } from './ProductItem';

export const ProductsList = (props) => {
    const { productList, onDelete, onEdit } = props;
    return (
        <div className="section__scroll">
            <table className="section__table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Options</th>
                    </tr>
                </thead>
                {productList.map((product) => (
                    <ProductItem
                        key={product._id}
                        productToShow={product}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </table>
        </div>
    );
};