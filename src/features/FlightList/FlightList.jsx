import { useState, useEffect } from 'react';
import TicketCard from '../../widgets/TicketCard/TicketCard';

import styles from './FlightList.module.scss';
import useFilteredTickets from '../../shared/hooks/useFilteredTickets';

function FlightList() {
	const [tickets, setTickets] = useState([]);
	const filteredTickets = useFilteredTickets(tickets).sort((a, b) => a.price - b.price);

	useEffect(() => {
		const getTickets = async () => {
			try {
				const response = await fetch('/tickets.json');
				if (!response.ok) throw new Error('Failed to fetch tickets');
				const { tickets } = await response.json();
				setTickets(tickets);
			} catch (error) {
				console.error('Error fetching tickets:', error);
			}
		};
		getTickets();
	}, []);

	return (
		<div className={styles.flightList}>
			{filteredTickets.map((ticket, index) => (
				<TicketCard key={index} ticket={ticket} />
			))}
		</div>
	);
}

export default FlightList;
