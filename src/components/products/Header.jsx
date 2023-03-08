import React from 'react';
import { AddProduct } from './AddProduct';
import { EditProduct } from './EditProduct';

export const Header = (props) => {
  const {
    showProductForm,
    setShowProductForm,
    onAddProduct,
    productToEdit,
    onEditProduct
  } = props;
  return (
    <div>
      <h1 className="section__title">Products</h1>
      <button
        className="section__button section__button--absolute"
        onClick={() =>
          setShowProductForm({ show: !showProductForm.show, mode: 'Add' })
        }
      >
        {showProductForm.show ? 'Cancel' : 'Add Product'}
      </button>

      {showProductForm.show ? (
        showProductForm.mode === 'Add' ? (
          <AddProduct onAddProduct={onAddProduct} />
        ) : (
          <EditProduct
            onEditProduct={onEditProduct}
            productToEdit={productToEdit}
          />
        )
      ) : undefined}
    </div>
  );
};