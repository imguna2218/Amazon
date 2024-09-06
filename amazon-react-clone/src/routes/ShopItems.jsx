// ShopItems.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import MakeItem from './MakeItem';
import NavBar from './NavBar';

const ShopItems = ({ apiName }) => {
  const clothItems = useSelector((state) => state.items.clothItems);
  const furnitureItems = useSelector((state) => state.items.furnitureItems);
  const healthCareItems = useSelector((state) => state.items.healthCareItems);
  const petCareItems = useSelector((state) => state.items.petCareItems);
  const beautyItems = useSelector((state) => state.items.beautyItems);
  const electronics = useSelector((state) => state.items.electronics);
  const toyItems = useSelector((state) => state.items.toyItems);
  const fashionItems = useSelector((state) => state.items.fashionItems);

  // useEffect(() => {
  //   if (fetchStatus.fetchDone) return;

  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   dispatch(fetchStatusActions.markFetchingStarted());
  //   fetch(`http://localhost:3001/${apiName}`, { signal })
  //     .then((res) => res.json())
  //     .then(({ items }) => {
  //       dispatch(fetchStatusActions.markFetchDone());
  //       dispatch(fetchStatusActions.markFetchingFinished());
  //       dispatch(itemsActions.addInitialItems(items[0]));
  //     });

  //   return () => {
  //     controller.abort();
  //   };
  // }, [fetchStatus]);


  return (
    <>
      <NavBar />

    </>
  )
}

export default ShopItems;
