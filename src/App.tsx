import React, { useState } from "react";
import OrderDetails from "./components/OrderDetails";
import AddItemsPanel from "./components/AddItemsPanel";
import "./App.css";

const menuItems = [
  { name: "Hamburger", price: 80 },
  { name: "CheeseBurger", price: 90 },
  { name: "Fries", price: 45 },
  { name: "Coffee", price: 70 },
  { name: "Tea", price: 50 },
  { name: "Cola", price: 40 },

];

const App: React.FC = () => {
  const [order, setOrder] = useState<{ name: string; quantity: number; price: number }[]>([]);

  const addItemToOrder = (name: string) => {
    const existingItem = order.find((item) => item.name === name);
    if (existingItem) {
      setOrder((prevOrder) =>
        prevOrder.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const selectedItem = menuItems.find((item) => item.name === name);
      if (selectedItem) {
        setOrder((prevOrder) => [...prevOrder, { name, quantity: 1, price: selectedItem.price }]);
      }
    }
  };

  const removeItemFromOrder = (name: string) => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.name !== name));
  };

  return (
    <div className="app">
      <OrderDetails order={order} onRemove={removeItemFromOrder} />
      <AddItemsPanel items={menuItems} onAdd={addItemToOrder} />
    </div>
  );
};

export default App;
