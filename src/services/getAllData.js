const DATA = [
	{
		id: 1,
		name: 'teclado',
		price: 10,
		isGrouped: true,
		img: 'https://images.pexels.com/photos/6014048/pexels-photo-6014048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'technology',
	},
	{
		id: 2,
		name: 'amohada',
		price: 20,
		isGrouped: false,
		img: 'https://images.pexels.com/photos/8527650/pexels-photo-8527650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'home',
	},
	{
		id: 3,
		name: 'moto',
		price: 30,
		isGrouped: false,
		img: 'https://images.pexels.com/photos/9607329/pexels-photo-9607329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'transportation',
	},
	{
		id: 4,
		name: 'computador ultimate pro R-5',
		price: 40,
		isGrouped: true,
		img: 'https://images.pexels.com/photos/8052612/pexels-photo-8052612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'technology',
	},
	{
		id: 5,
		name: 'cama',
		price: 50,
		isGrouped: false,
		img: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'home',
	},
	{
		id: 6,
		name: 'carro',
		price: 60,
		isGrouped: false,
		img: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'transportation',
	},
	{
		id: 7,
		name: 'camara',
		price: 70,
		isGrouped: true,
		img: 'https://images.pexels.com/photos/8114133/pexels-photo-8114133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'technology',
	},
	{
		id: 8,
		name: 'vajilla',
		price: 80,
		isGrouped: false,
		img: 'https://images.pexels.com/photos/6794075/pexels-photo-6794075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'home',
	},
	{
		id: 9,
		name: 'avion',
		price: 90,
		isGrouped: false,
		img: 'https://images.pexels.com/photos/11428842/pexels-photo-11428842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'transportation',
	},
	{
		id: 10,
		name: 'celular',
		price: 100,
		isGrouped: true,
		img: 'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'technology',
	},
	{
		id: 11,
		name: 'mesa',
		price: 110,
		isGrouped: false,
		img: 'https://images.pexels.com/photos/8154678/pexels-photo-8154678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'home',
	},
	{
		id: 12,
		name: 'barco',
		price: 120,
		isGrouped: false,
		img: 'https://images.pexels.com/photos/10832737/pexels-photo-10832737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'transportation',
	},
];
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const getAllData = async () => {
	// const res = await fetch('http://my_api.com');
	// const data = await res.json();
	await delay(500);
	return DATA;
};

export default getAllData;
