import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

import Order from "../Order/Order";

export default function Header() {
  const orders = useSelector((state) => state.orders.orders);
  const [cartOpen, setCartOpen] = useState(false);

  const showOrders = (items) => {
    let amount = 0;

    items.forEach((el) => {
      amount += el.price;
    });

    return (
      <div>
        {items.map((item) => (
          <Order key={item.id} item={item} />
        ))}
        <p className="sum">Amount: {new Intl.NumberFormat().format(amount)}$</p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>There are no goods</h2>
      </div>
    );
  };

  return (
    <header>
      <div className="wrapper">
        <NavLink to="/" className="logo">
          House Staff
        </NavLink>

        <ul className="nav">
          <li>
            <NavLink to="about">About us</NavLink>
          </li>
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
        </ul>

        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-btn ${cartOpen && "active-icon"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>
        )}
      </div>
    </header>
  );
}
