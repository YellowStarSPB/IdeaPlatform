import FlightFilters from '../features/FlightFilters/FlightFilters';
import FlightList from '../features/FlightList/FlightList';
import { FilterProvider } from './FilterContext';

function App() {
	return (
		<main className="main">
			<FilterProvider>
				<FlightFilters />
				<FlightList />
			</FilterProvider>
		</main>
	);
}

export default App;
