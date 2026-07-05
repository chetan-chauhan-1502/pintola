import React, { useEffect } from "react";
import "./Cart.css";
import Title from "../Home/Title/Title";
import { useSelector, useDispatch } from "react-redux";
import { remove, increment, decrement } from "../Store/CartSlice";
import { FaWindowClose } from "react-icons/fa";

const Cart = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let REMOVE = (itemId) => {
    dispatch(remove(itemId));
  };

  let INCR = (itemId) => {
    dispatch(increment(itemId));
  };
  let DECR = (itemId) => {
    dispatch(decrement(itemId));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(names));
  }, []);

  let price = names.reduce((def, item) => def + item.price * item.quantity, 0);

  return (
    <>
      <Title titleName={"Shopping Carts"} />

      <table class="table">
        <thead>
          <tr>
            <th>Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {names.length === 0 ? (
          <h1 className="text-danger " >No Item Cart</h1>
        ) : (
          ""
        )}
          {names.map((item) => {
            let price = item.price * item.quantity;
            return (
              <>
                <tr>
                  <td class="product">
                    <img src={item.img} alt="" />
                    <h5>{item.title}</h5>
                  </td>
                  <td class="productPrice">Rs.{item.price}</td>
                  <td class="countNumber">
                    <button onClick={() => DECR(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => INCR(item.id)}>+</button>
                  </td>
                  <td class="productTotal">Rs.{price}</td>
                  <td style={{ textAlign: "center" }}>
                    <FaWindowClose
                      className="removeItem"
                      onClick={() => REMOVE(item.id)}
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <div className="totalPrice">
        <span>SubTotal : Rs.{price  }</span>
      </div>
    </>
  );
};

export default Cart;
