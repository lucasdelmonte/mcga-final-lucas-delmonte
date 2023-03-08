import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsyncCreator, editAsyncCreator } from '../../actions/productsActions';

export const ProductForm = (props) => {
	const dispatch = useDispatch();
	const { type, product } = props;
	const [name, setName] = useState(product ? product.name : '');
	const [description, setDescription] = useState(product ? product.description : '');
	const [price, setPrice] = useState(product ? product.price : '');
	const [brand, setBrand] = useState(product ? product.brand : '');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (type === 'add') {
			const product = { name, description, price, brand };
			const action = addAsyncCreator(product);
			dispatch(action);
		}
		if (type === 'edit') {
			const payloadProduct = {
				id: product._id,
				name,
				description,
				price,
				brand,
			};
			const action = editAsyncCreator(payloadProduct);
			dispatch(action);
		}
		setName('');
		setDescription('');
		setPrice('');
		setBrand('');
	};

	useEffect(() => {
		setName(product ? product.name : '');
		setDescription(product ? product.description : '');
		setPrice(product ? product.price : '');
		setBrand(product ? product.brand : '');
	}, [product]);

	return (
		<>
			<form onSubmit={handleSubmit} className="form form--section">
				<input
					type="text"
					name="name"
					placeholder="Name"
					className="form__input form__input--section"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<input
					type="text"
					name="description"
					placeholder="Description"
					className="form__input form__input--section"
					onChange={(e) => setDescription(e.target.value)}
					value={description}
				/>
				<input
					type="number"
					name="price"
					placeholder="Price"
					className="form__input form__input--section"
					onChange={(e) => setPrice(e.target.value)}
					value={price}
				/>
				<input
					type="text"
					name="brand"
					placeholder="Brand"
					className="form__input form__input--section"
					onChange={(e) => setBrand(e.target.value)}
					value={brand}
				/>
				<button className="form__button" type="submit">
					Confirm
				</button>
			</form>
		</>
	);
};