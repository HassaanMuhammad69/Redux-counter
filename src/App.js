import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber ,decNumber } from './actions/action';


const App =() => {

const myState = useSelector(( state) => state.changeTheNumber)
const dispatch = useDispatch()
  return (
    <div className='container' >
    <h1>Increment/Decrement counter using Redux</h1>

    <div>
      <a onClick={()=> dispatch(decNumber())}><span>-</span></a>
      <input name='quantity' type='text' value={myState} />
      <a onClick={()=> dispatch(incNumber())}><span>+</span></a>

    </div>
    </div>
  );
} 

export default App;
