import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators, addToDo } from '../store';

const Home = () => {
	const [ text, setText ] = useState('');
	const onChange = (event) => {
		setText(event.target.value);
	};
	const toDo = useSelector((state) => state);
	const dispatch = useDispatch();
	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addToDo(text));
		setText('');
	};
	return (
		<div>
			<h1>to do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={text} onChange={onChange} />
				<button>Add</button>
			</form>
			<ul>{toDo.map((todo) => <ToDo {...todo} key={todo.id} />)}</ul>
		</div>
	);
};

export default Home;

// const Home = ({ toDos, addToDo }) => {
// 	const [ text, setText ] = useState('');
// 	const onChange = (e) => {
// 		setText(e.target.value);
// 	};
// 	const onSubmit = (e) => {
// 		e.preventDefault();
// 		addToDo(text);
// 		setText('');
// 	};
// 	return (
// 		<div>
// 			<h1>to do</h1>
// 			<form onSubmit={onSubmit}>
// 				<input type="text" value={text} onChange={onChange} />
// 				<button>Add</button>
// 			</form>
// 			<ul>{JSON.stringify(toDos)}</ul>
// 		</div>
// 	);
// };

// const mapStateToProps = (state) => {
// 	return { toDos: state };
// };
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addToDo: (text) => dispatch(actionCreators.addToDo(text))
// 	};
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
