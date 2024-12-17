export function formatDate(dateStr) {
	const dateParts = dateStr.split('.');
	const year = `20${dateParts[2]}`; // Преобразуем двухзначный год в четырехзначный
	const month = dateParts[1]; // Месяц
	const day = dateParts[0]; // День

	// Создаем объект Date с правильным форматом YYYY-MM-DD
	const date = new Date(`${year}-${month}-${day}`);

	// Форматируем дату с русской локализацией
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	let formattedDate = date.toLocaleString('ru-RU', options);

	// Разделяем дату на части и обрезаем месяц до первых 3 букв
	formattedDate = formattedDate.split(' ');
	formattedDate[1] = formattedDate[1].slice(0, 3); // Сокращаем месяц до первых 3 букв
	formattedDate = formattedDate.join(' ');

	// Убираем "г." в конце
	return formattedDate.replace(' г.', '');
}
