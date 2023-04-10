import { useDispatch } from "react-redux";
import { deleteOrder } from "../../redux/orders";
import { FaTrash } from "react-icons/fa";

const Order = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="item">
      <img src={`${item.img}`} alt={item.title} />
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
      <FaTrash
        className="delete-icon"
        onClick={() => dispatch(deleteOrder(item.id))}
      />
    </div>
  );
};

export default Order;
