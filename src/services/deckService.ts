import { instanceAxios } from './axiosHelper';

export const newDeck = async () => {
	try {
		const { data } = await instanceAxios.get('/new/shuffle/?deck_count=1');
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getCards = async (idDeck: string) => {
	try {
		const { data } = await instanceAxios.get(`/${idDeck}/draw/?count=2`);
		return data;
	} catch (error) {
		console.log(error);
	}
};
