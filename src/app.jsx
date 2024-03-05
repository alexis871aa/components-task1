import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueValid, setIsValue] = useState(true);
	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');
		if (!promptValue) {
			return;
		}
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			setIsValue(false);
		} else {
			setValue(promptValue);
			setError('');
			setIsValue(true);
		}
	};

	const nowDateFormat = () => {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		return ` ${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
	};

	const onAddButtonClick = () => {
		if (!value) {
			return;
		}
		setList((prevList) => [
			...prevList,
			{ id: Date.now(), value: value, date: nowDateFormat() },
		]);
		setError('');
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>:
				<output className={styles['current-value']}>{` "${value}"`}</output>
			</p>
			{error && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueValid}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				<ul className={styles.list}>
					{list.length > 0 ? (
						list.map((item) => {
							return (
								<li key={item.id} className={styles['list-item']}>
									{`${item.value} ${item.date}`}
								</li>
							);
						})
					) : (
						<p className={styles['no-margin-text']}>
							Нет добавленных элементов
						</p>
					)}
				</ul>
			</div>
		</div>
	);
};
