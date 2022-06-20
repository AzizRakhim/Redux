import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { counterActions } from './store';

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const incrementHandler = (num) => {
    dispatch(counterActions.increment(num))
  }

  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  }

  return (
    <div className='box'>
      <h2 className='box__title'>
        Redux Counter
      </h2>
      {
        show && <span className='box__value'>
          {counter}
        </span>
      }
      
      <div className='box__container'>
        <button className='btn btn-danger' onClick={decrementHandler}>
          Minus 
        </button>
        <button className='btn btn-danger' onClick={() => incrementHandler(1)}>
          Plus + 1
        </button>
        <button className='btn btn-danger' onClick={() => incrementHandler(5)}>
          Plus + 5
        </button>
        <button className='btn btn-danger' onClick={toggleHandler}>
          Toggle
        </button>
      </div>
    </div>
  )
}

export default Counter
