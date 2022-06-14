import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { status } from '../redux/categories/categories';

function Categories() {
  const underConstruction = useSelector((state) => state.status);
  const dispatch = useDispatch();

  return (
    <div>
      <button type="submit" onClick={() => dispatch(status())}>CHECK STATUS</button>
      <h1>{underConstruction[0]}</h1>
    </div>
  );
}

export default Categories;
