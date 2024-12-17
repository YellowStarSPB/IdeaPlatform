export function formatStops(stops) {
	let result = '';
	if (stops === 1) {
		result = `${stops} пересадка`;
	} else if (stops > 1 && stops < 5) {
		result = `${stops} пересадки`;
	} else if (stops >= 5) {
		result = `${stops} пересадок`;
	} else {
		result = 'без пересадок';
	}
	return result;
}
