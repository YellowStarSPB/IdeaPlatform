import { memo } from 'react';
import { formatDate } from '../../shared/lib/formatDate';
import { formatStops } from '../../shared/lib/formatStops';
import BuyButton from '../../shared/ui/BuyButton/BuyButton';
import styles from './TicketCard.module.scss';

const TicketCard = memo(function TicketCard({ ticket }) {
	const {
		origin,
		origin_name,
		destination,
		destination_name,
		departure_date,
		departure_time,
		arrival_date,
		arrival_time,
		price,
		stops
	} = ticket;

	return (
		<div className={styles.tickedCard}>
			<div className={styles.buy}>
				<img className={styles.logo} src="/images/ticket-logo.jpg" alt="logo" />
				<BuyButton price={price}>Купить</BuyButton>
			</div>
			<div className={styles.information}>
				<div className={styles.from}>
					<h2 className={styles.time}>{departure_time}</h2>
					<p className={styles.city}>{`${origin} ${origin_name}`}</p>
					<p className={styles.date}>{formatDate(departure_date)}</p>
				</div>
				<span className={styles.arrow}>{formatStops(stops)}</span>
				<div className={styles.to}>
					<h2 className={styles.time}>{arrival_time}</h2>
					<p className={styles.city}>{`${destination_name} ${destination}`}</p>
					<p className={styles.date}>{formatDate(arrival_date)}</p>
				</div>
			</div>
		</div>
	);
});

export default TicketCard;
