import { Routes, Route } from 'react-router-dom';

import { DeckProvider } from "./context/DeckProvider";
import { Game } from './pages/Game';
import { Home } from './pages/Home';


export const App: React.FC = () => (
	<DeckProvider>
		<section>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/game" element={<Game />}></Route>
			</Routes>
		</section>
	</DeckProvider>
);
