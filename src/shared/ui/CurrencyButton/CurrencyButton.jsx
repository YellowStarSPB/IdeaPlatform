import styles from './CurrencyButton.module.scss';

function CurrencyButton({ children, className, borderType, isActive,onClick }) {
	const classes = [styles.currencyButton, className, styles[borderType]];
	return (
		<button onClick={() => onClick(children)} className={`${classes.join(' ')} ${isActive ? styles.active : ''}`}>
			{children}
		</button>
	);
}

export default CurrencyButton;
