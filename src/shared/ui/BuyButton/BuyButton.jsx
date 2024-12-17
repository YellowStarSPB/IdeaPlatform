import styles from './BuyButton.module.scss';

function BuyButton({ children, price, currencySign }) {
	return (
		<button className={styles.buyButton}>
			{children}
			<span className={styles.price}>{`за ${price} ${currencySign}`}</span>
		</button>
	);
}

export default BuyButton;
