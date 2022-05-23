import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
	if (action.type === 'ADD') {
		count++;
	} else if (action.type === 'MINUS') {
		count--;
	}
	return count;
};
const countStore = createStore(countModifier);
console.log(countStore.getState());

countStore.dispatch({ type: 'ADD' });
add.addEventListener('click', countStore.dispatch({ type: 'ADD' }));
minus.addEventListener('click', countStore.dispatch({ type: 'MINUS' }));
