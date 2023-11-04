import React from "react";
import OrderItem from "./OrderItem";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  image?: string;

}

interface OrderDetailsProps {
  order: { name: string; quantity: number; price: number }[];
  onRemove: (name: string) => void;
  totalPrice: number;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, onRemove, totalPrice }) => {
  return (
    <div className="order-details">
      {order.length === 0 ? <p>Пока тут ничего нету</p> : null}
      {order.map((item, index) => (
        <OrderItem
          key={index}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemove={() => onRemove(item.name)}
        />
      ))}
      <p className="total-price">Общая сумма заказа: {totalPrice} KGS</p>
    </div>
  );
};

export default OrderDetails;
