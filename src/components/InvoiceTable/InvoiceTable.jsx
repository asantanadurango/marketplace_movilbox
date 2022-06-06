import './styles.css';
import TableRecord from '../TableRecord/TableRecord';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Modal from '../Modal/Modal';
const InvoiceTable = ({ data = [], removeItemToCart }) => {
	const totalInititial = data.reduce((acc, el) => acc + el.price || 0, 0);
	const [total, setTotal] = useState(totalInititial);
	const handleAddTotal = price => setTotal(total + price);
	const handleSubtractTotal = price => setTotal(total - price);
	const [smShow, setSmShow] = useState(false);

	const columnNames = Object.keys(data[0]);
	columnNames.splice(0, 1);
	return (
		<div className='col d-flex justify-content-center flex-column align-items-center'>
			<table>
				<thead>
					<tr>
						{columnNames.map(e => (
							<th key={e}>{e}</th>
						))}
						<th>Units</th>
						<th>Sub-total</th>
						<th> Remove</th>
					</tr>
				</thead>
				<tbody>
					{data.map(record => (
						<TableRecord
							key={record.id}
							record={record}
							removeItemToCart={removeItemToCart}
							addTotal={handleAddTotal}
							subtractTotal={handleSubtractTotal}
						/>
					))}
				</tbody>
			</table>
			<div className='mt-4 text-center'>
				<strong className='col mx-3'>Total: ${total}</strong>
				<Button onClick={() => setSmShow(true)} variant='outline-info px-4 py-1'>
					Buy
				</Button>
				<Modal smShow={smShow} />
			</div>
		</div>
	);
};

export default InvoiceTable;