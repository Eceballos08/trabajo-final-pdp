import { instanceAxios } from './axiosHelper';

//obtener la baraja
export const newDeck = async () => {
	try {
		const { data } = await instanceAxios.get('/new/shuffle/?deck_count=1');
		return data;
	} catch (error) {
		console.log(error);
	}
};

//obtener las cartas que se irán repartiendo
export const getCards = async (idDeck: string) => {
	try {
		const { data } = await instanceAxios.get(`/${idDeck}/draw/?count=2`);
		return data;
	} catch (error) {
		console.log(error);
	}
};

//obtener las 10 primeras cartas
export const getInitialCards = async (idDeck: string) => {
	try {
		const { data } = await instanceAxios.get(`/${idDeck}/draw/?count=20`)
		return data;
	} catch (error) {
		console.error(error)
	}
}
