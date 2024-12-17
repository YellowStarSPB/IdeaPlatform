import { useState } from 'react';
import TicketCard from '../../widgets/TicketCard/TicketCard';
import styles from './FlightList.module.scss';
import { useEffect } from 'react';
import { useFilters } from '../../app/FilterContext';

function FlightList() {
	const [tickets, setTickets] = useState([]);
	const {
		filters: { currency, transfer }
	} = useFilters();

	const prepearedTickets = tickets.map((ticket) => {
		const newTicket = { ...ticket };
		switch (currency) {
			case 'RUB':
				newTicket.price = parseInt(ticket.price);
				newTicket.currencySign = '₽';
				break;
			case 'USD':
				newTicket.price = parseInt(ticket.price / 100);
				newTicket.currencySign = '$';
				break;
			case 'EUR':
				newTicket.price = parseInt(ticket.price / 120);
				newTicket.currencySign = '€';
		}
		return newTicket;
	});
	const filteredTickets =
		transfer.includes('all') || transfer.length === 0
			? prepearedTickets
			: prepearedTickets.filter((ticket) => transfer.includes(`${ticket.stops}`));
	console.log(filteredTickets);
	useEffect(() => {
		const getTickets = async () => {
			const json = await fetch('/tickets.json');
			const { tickets } = await json.json();
			tickets.map((ticket) => {
				ticket.currencySign = '₽';
				return ticket;
			});
			setTickets(tickets);
		};
		getTickets();
	}, []);

	return (
		<div className={styles.flightList}>
			{filteredTickets
				.sort((a, b) => a.price - b.price)
				.map((ticket, index) => (
					<TicketCard key={index} ticket={ticket} />
				))}
		</div>
	);
}

export default FlightList;
