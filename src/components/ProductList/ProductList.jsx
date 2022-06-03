import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
const ProductList = ({ data = [], action, btnText, cart = [] }) => {
	console.log('prduclist');
	const { query } = useParams();
	data = query ? data.filter(p => p.category === query) : data;
	return (
		<ul className='row'>
			{data.map(({ id, name, price, isGrouped, img, category }, idx) => {
				const existOnCart = cart.some(e => e.id === id);
				return (
					<ProductCard
						key={idx}
						id={id}
						name={name}
						price={price}
						isGrouped={isGrouped}
						img={img}
						category={category}
						action={action}
						btnText={btnText}
						existOnCart={existOnCart}
					/>
				);
			})}
		</ul>
	);
};

export default ProductList;
