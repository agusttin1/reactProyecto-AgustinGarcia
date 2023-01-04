import { createContext, useState, useEffect } from "react";

export const WishContext = createContext();

const WishContexProvider = ({ children }) => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    const productos = JSON.parse(localStorage.getItem("libros"));

    productos ? setWish(productos) : setWish([]);
  }, []);

  const saveToLocalStorage = (item) => {
    localStorage.setItem("libros", JSON.stringify(item));
  };
  const removeOfWishList = (id) => {
    const refreshArray = wish.filter((idFound) => idFound.id !== id);
    setWish(refreshArray);
    saveToLocalStorage(refreshArray);
  };

  const QtyInWish = () => wish.reduce((acc, el) => acc + el, wish.length);
  const Existe = (id) => wish.some((WishProduct) => WishProduct.id === id);

  const addToWishList = (item) => {
    if (!Existe(item.id)) {
      const nwWishList = [...wish, item];
      setWish(nwWishList);
      saveToLocalStorage(nwWishList);
    } else {
      const nwWishListNoRepeat = [...wish];

      setWish(nwWishListNoRepeat);
      saveToLocalStorage(nwWishListNoRepeat);
    }
  };
  return (
    <>
      <WishContext.Provider
        value={{ addToWishList, wish, QtyInWish, removeOfWishList, Existe }}
      >
        {children}
      </WishContext.Provider>
    </>
  );
};

export default WishContexProvider;
