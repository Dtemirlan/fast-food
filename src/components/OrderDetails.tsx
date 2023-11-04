import React from "react";
import OrderItem from "./OrderItem";

interface OrderDetailsProps {
    order: { name: string; quantity: number; price: number }[];
    onRemove: (name: string) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, onRemove }) => {
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
        </div>
    );
};

export default OrderDetails;
