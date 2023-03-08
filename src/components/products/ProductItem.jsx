import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAsyncCreator } from '../../actions/productsActions';

export const ProductItem = (props) => {
	const dispatch = useDispatch();
	const { productToShow, onEdit } = props;

	const handleDelete = (id) => {
		const action = deleteAsyncCreator(productToShow._id);
		dispatch(action);
	};

	return (
		<tr>
			<td>{productToShow.name}</td>
			<td>{productToShow.description}</td>
			<td>{productToShow.price}</td>
			<td>{productToShow.brand}</td>
			<td>
                <button className="form__button form__button--edit" onClick={() => onEdit(productToShow)}>
                    Edit
                </button>
                <button className="form__button form__button--delete" onClick={handleDelete} >
                    Delete
                </button>
			</td>
		</tr>
	);
};