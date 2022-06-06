import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import GrupedSpan from './../GrupedSpan/GrupedSpan';

const BtnSetUnits = ({ action, btnText, varian, disabled = false }) => (
	<Button disabled={disabled} variant={varian} size='sm' onClick={action}>
		{btnText}
	</Button>
);

const TableRecord = ({ record, removeItemToCart, addTotal, subtractTotal }) => {
	const { id, name, price, isGrouped, img, category } = record;
	const [units, setUnits] = useState(1);
	const add = () => {
		setUnits(units + 1);
		addTotal(price);
	};
	const subtract = () => {
		units > 1 && setUnits(units - 1);
		subtractTotal(price);
	};
	return (
		<tr>
			<td>{name[0].toUpperCase() + name.slice(1)}</td>
			<td>{price}</td>
			<td>
				<GrupedSpan isGrouped={isGrouped} />
			</td>
			<td>
				<img style={{ width: '50px', height: '50px' }} src={img} alt={`img-table-${name}`} />
			</td>
			<td>{category}</td>
			<td>
				<BtnSetUnits action={subtract} btnText='-' varian={'outline-danger'} disabled={units === 1 && true} />
				<span style={{ margin: '5px', position: 'relative', top: '3px', userSelect: 'none' }}>{units}</span>
				<BtnSetUnits action={add} btnText='+' varian={'outline-success'} />
			</td>
			<td>$ {units * price}</td>
			<td>
				<Button
					variant='primary'
					className='col w-auto'
					onClick={() => {
						removeItemToCart({ id, name, price, isGrouped, img, category });
						subtractTotal(units * price);
					}}>
					Remove
				</Button>
			</td>
		</tr>
	);
};

export default TableRecord;
