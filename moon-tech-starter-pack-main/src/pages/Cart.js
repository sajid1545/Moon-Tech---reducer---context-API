import React from 'react';
import { useProducts } from '../context/ProductProvider';

const Cart = () => {
	const {
		state: { products, loading, error, cart },
		dispatch,
	} = useProducts();

	let content;

	if (loading) {
		content = <p>Loading...</p>;
	}

	if (error) {
		content = <p>Something went wrong</p>;
	}

	if (!loading && !error && cart.length === 0) {
		content = <p>No products AVAILABLE</p>;
	}
	if (!loading && !error && cart.length) {
		content = cart.map((product) => (
			<>
				<div className="border-2 border-black">
					<div className="h-52 w-52 mx-auto">
						<img src={product.image} alt={product.model} />
					</div>
					<h1 className="font-bold text-center">{product.model}</h1>
					<p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
					<button
						onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product })}
						className="w-6 h-6 rounded-full bg-red-500 block mx-auto">
						{' '}
						X{' '}
					</button>
				</div>
			</>
		));
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
			{content}
		</div>
	);
};

export default Cart;
