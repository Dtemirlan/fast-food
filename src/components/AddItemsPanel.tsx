import React from "react";

interface AddItemsPanelProps {
  items: { name: string; price: number }[];
  onAdd: (name: string) => void;
}

const AddItemsPanel: React.FC<AddItemsPanelProps> = ({ items, onAdd }) => {
  return (
    <div className="add-items-panel">
      {items.map((item, index) => (
        <button key={index} onClick={() => onAdd(item.name)}>
          {item.name} - {item.price} KGS
        </button>
      ))}
    </div>
  );
};

export default AddItemsPanel;
