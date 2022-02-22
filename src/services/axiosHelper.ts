import axios from 'axios';

export const instanceAxios = axios.create({
	baseURL: 'http://deckofcardsapi.com/api/deck',
});
