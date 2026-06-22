import { useParams, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoffeeList from './CoffeeList';
import { fetchCoffeeByType, selectCoffeeByType } from '../store/coffeeSlice';

function CoffeeLayout() {
  const { type } = useParams(); // 'hot' or 'iced'
  const dispatch = useDispatch();
  const { drinks, status, error } = useSelector((state) => selectCoffeeByType(state, type));

  useEffect(() => {
    dispatch(fetchCoffeeByType(type));
  }, [dispatch, type]);

  if (status === 'idle' || status === 'loading') {
    return (
      <div className="coffee-layout">
        <div className="loading-container">Loading coffee drinks...</div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="coffee-layout">
        <div className="error-container">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="coffee-layout">
      <CoffeeList drinks={drinks} type={type} />
      <Outlet />
    </div>
  );
}

export default CoffeeLayout;
