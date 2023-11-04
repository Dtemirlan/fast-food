import React from "react";

interface OrderItemProps {
    name: string;
    quantity: number;
    price: number;
    onRemove: () => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ name, quantity, price, onRemove }) => {
    return (
        <div className="order-item">
            <span>{name} x{quantity}</span>
            <span>{price} KGS</span>
            <button onClick={onRemove}>Удалить</button>
        </div>
    );
};

export default OrderItem;
