import Item from "../Item/Item";

const List = ({ items }) => {
  return (
    <main>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </main>
  );
};

export default List;
