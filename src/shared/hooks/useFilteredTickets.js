import { useFilters } from "../../app/FilterContext";

function useFilteredTickets(tickets) {
	const { transfer } = useFilters().filters;
	let filteredTickets = [];

	if (transfer.includes('all') || transfer.length === 0) {
		filteredTickets = tickets;
	} else if (transfer.includes('without')) {
		filteredTickets = tickets.filter((ticket) => ticket.stops === 0);
	} else {
		filteredTickets = tickets.filter((ticket) => transfer.includes(`${ticket.stops}`));
	}
	return filteredTickets;
}

export default useFilteredTickets;
