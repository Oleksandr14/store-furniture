import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../redux/orders";

const Item = ({ item }) => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const addToOrder = (order) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      dispatch(addOrder(order));
    }
  };

  return (
    <div className="item">
      <img src={`${item.img}`} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className="add-to-card" onClick={() => addToOrder(item)}>
        +
      </div>
    </div>
  );
};

export default Item;
