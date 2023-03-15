import React from "react";
import { useEffect } from "react";
import BookItem from "./BookItem";
import bookList from "../json/productInfo.json";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "redux/slice/userSlice";
import { toast } from "react-toastify";
const BookList = () => {
  useEffect(() => {
    // fetchBookList();
  }, []);
  const { carts } = useSelector((state) => state.user);
  console.log("🚀 ~ file: BookList.js:13 ~ BookList ~ carts:", carts);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    const index = carts.findIndex((cartItem) => cartItem.id === item.id);
    if (index === -1) {
      dispatch(setCart([...carts, { ...item, quantity: 1 }]));
    } else {
      const updatedItem = {
        ...carts[index],
        quantity: carts[index].quantity + 1,
      };
      const updatedCartItems = [
        ...carts.slice(0, index),
        updatedItem,
        ...carts.slice(index + 1),
      ];
      dispatch(setCart(updatedCartItems));
    }
    toast.success(`Add ${item.name.toLowerCase()} to cart successfully!`);
  };
  useEffect(() => {}, []);
  return (
    <div className="grid grid-cols-5 gap-10 mb-10">
      {bookList.map((item) => {
        return (
          <BookItem
            key={v4()}
            id={item.id}
            title={item.name}
            author={item.author_name}
            imageURL={item.image_url}
            price={item.price}
            handleAddToCart={() => handleAddToCart(item)}
            // isExistCart={itemExistCart(item.id)}
          ></BookItem>
        );
      })}
    </div>
  );
};

export default BookList;
