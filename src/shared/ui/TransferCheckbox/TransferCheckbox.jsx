import { useFilters } from '../../../app/FilterContext';
import styles from './TransferCheckbox.module.scss';

function TransferCheckbox({ label, value, handleTransferChange,transfer }) {

	return (
		<label className={styles.transferCheckbox}>
			<input
				value={value}
				onChange={handleTransferChange}
				style={{ display: 'none' }}
				checked={transfer.includes(value)}
				type="checkbox"
			/>
			<span className={styles.customCheckbox}></span>
			{label}
		</label>
	);
}

export default TransferCheckbox;
