import { useCallback } from 'react';
import { useFilters } from '../../app/FilterContext';
import CurrencyButton from '../../shared/ui/CurrencyButton/CurrencyButton';
import TransferCheckbox from '../../shared/ui/TransferCheckbox/TransferCheckbox';
import styles from './FlightFilters.module.scss';

const currencies = [
	{ value: 'RUB', borderType: 'left' },
	{ value: 'USD' },
	{ value: 'EUR', borderType: 'right' }
];

const transfers = [
	{ value: 'all', label: 'Все' },
	{ value: 'without', label: 'Без пересадок' },
	{ value: '1', label: '1 Пересадка' },
	{ value: '2', label: '2 Пересадки' },
	{ value: '3', label: '3 Пересадки' }
];

function FlightFilters() {
	const { filters, updateFilters } = useFilters();

	const handleChangeCurrency = useCallback((value) => {
		updateFilters((prev) => ({ ...prev, currency: value }));
	}, []);

	const handleTransferChange = useCallback((event) => {
		const value = event.target.value;
		const isChecked = event.target.checked;

		if (isChecked) {
			updateFilters((prev) => ({ ...prev, transfer: [...prev.transfer, value] }));
		} else {
			updateFilters((prev) => ({
				...prev,
				transfer: prev.transfer.filter((transferValue) => transferValue !== value)
			}));
		}
	}, []);

	return (
		<div className={styles.flightFilters}>
			<div className={styles.currencies}>
				<h2 className={styles.title}>Валюта</h2>
				<div className={styles.currenciesButtons}>
					{currencies.map(({ value, borderType }) => (
						<CurrencyButton
							key={value}
							borderType={borderType}
							isActive={filters.currency === value}
							onClick={handleChangeCurrency}
							className={styles.currencyButton}>
							{value}
						</CurrencyButton>
					))}
				</div>
			</div>
			<div className={styles.transfers}>
				<h2 className={styles.title}>Количество пересадок</h2>
				<div className={styles.transfersFilters}>
					{transfers.map((transfer) => (
						<TransferCheckbox
							key={transfer.value}
							handleTransferChange={handleTransferChange}
							{...transfer}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default FlightFilters;
