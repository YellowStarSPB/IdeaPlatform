// FilterContext.js
import React, { createContext, useState, useContext } from 'react';

// Создаем контекст
const FilterContext = createContext(null);

// Провайдер для фильтров
export const FilterProvider = ({ children }) => {
	const [filters, setFilters] = useState({
		currency: 'RUB',
		transfer: []
	});
	console.log(filters.transfer, 'FILTERS');
	return (
		<FilterContext.Provider value={{ filters, updateFilters: setFilters }}>
			{children}
		</FilterContext.Provider>
	);
};

// Хук для использования контекста
export const useFilters = () => {
	return useContext(FilterContext);
};
