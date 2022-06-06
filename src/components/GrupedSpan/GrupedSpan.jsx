const GrupedSpan = ({ isGrouped }) => {
	const optionsGruped = {
		true: { color: '#198754', value: 'Yes' },
		false: { color: '#dc3545', value: 'Not' },
	};

	const { color, value } = optionsGruped[isGrouped.toString()];
	return <strong style={{ color }}>{value}</strong>;
};

export default GrupedSpan;