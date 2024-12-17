import { useFilters } from '../../../app/FilterContext';
import styles from './BuyButton.module.scss';

function BuyButton({ children, price }) {
	const { currency } = useFilters().filters;
	let currencySign = '';
	let currentPrice = '';

	switch (currency) {
		case 'RUB':
			currentPrice = parseInt(price);
			currencySign = '₽';
			break;
		case 'USD':
			currentPrice = parseInt(price / 100);
			currencySign = '$';
			break;
		case 'EUR':
			currentPrice = parseInt(price / 120);
			currencySign = '€';
	}

	return (
		<button className={styles.buyButton}>
			{children}
			<span className={styles.price}>{`за ${currentPrice} ${currencySign}`}</span>
		</button>
	);
}

export default BuyButton;
