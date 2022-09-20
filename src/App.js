import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import store from './redux';
import {getAllUsers,plusCount, minusCount, changeName} from "./redux/reducers/users/users"

function App() {
const dispatch = useDispatch()
const count = useSelector((store) => store.users.count)
const users = useSelector((store) => store.users.arr)
const name = useSelector((store) => store.users.name)

useEffect(() => {
  dispatch(getAllUsers())
}, [])

const handleClick = id => dispatch({
  type: 'DELETE_USER',
  payload: id,
})
if (!users || !users.length) {
  return <h1 className='koichai'>ЮЗЕРОВ НЕТ</h1>
}




  return (
    <div className="App">
    <h2>{count}</h2>
    <button onClick={() => dispatch(plusCount())}>+</button>
    <button onClick={() => dispatch(minusCount())}>-</button>

    <ul>
      {users.map((item) => (
        <>
          <li key={item.id}>{item.name}</li>
          <button onClick={() => handleClick(item.id)}>Удалить</button>
        </>
      ))}
    </ul>

    <h2>{name}</h2>

    <input type="text" onChange={(e) => dispatch(changeName(e.target.value))}/>
    </div>
  );
}

export default App;
