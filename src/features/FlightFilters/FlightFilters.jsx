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

function FlightFilters() {
	const { filters, updateFilters } = useFilters();

	const handleChangeCurrency = useCallback((value) => {
		updateFilters((prev) => ({ ...prev, currency: value }));
	}, []);
	const handleTransferChange = (event) => {
		const value = event.target.value;
		const isChecked = event.target.checked;

		// Обновление массива transfer в контексте
		if (isChecked) {
			// Добавляем значение в массив, если чекбокс выбран
			updateFilters((prev) => ({ ...prev, transfer: [...prev.transfer, value] }));
		} else {
			// Удаляем значение из массива, если чекбокс снят
			updateFilters((prev) => ({
				...prev,
				transfer: prev.transfer.filter((transferValue) => transferValue !== value)
			}));
		}
	};
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
					<TransferCheckbox
						handleTransferChange={handleTransferChange}
						value="all"
						label="Все"
            transfer={filters.transfer}
					/>
					<TransferCheckbox
						handleTransferChange={handleTransferChange}
						value="1"
						label="1 пересадка"
            transfer={filters.transfer}
					/>
					<TransferCheckbox
						handleTransferChange={handleTransferChange}
						value="2"
						label="2 пересадки"
            transfer={filters.transfer}
					/>
					<TransferCheckbox
						handleTransferChange={handleTransferChange}
						value="3"
						label="3 пересадки"
            transfer={filters.transfer}
					/>
				</div>
			</div>
		</div>
	);
}

export default FlightFilters;
