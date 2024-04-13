import React from 'react';

function ListItem({ item }) {
  const { name, description, variations } = item.item_data;
  const firstVariation = variations[0]; // Assuming first variation for now
  const price = firstVariation?.item_variation_data?.price_money?.amount;
  const currency = firstVariation?.item_variation_data?.price_money?.currency;

  return (
    <div className="item-card">
      <h2>{name}</h2>
      <p>{description}</p>
      {price && (
        <p>
          Price: {price} {currency}
        </p>
      )}
      {/* Add logic to display image if available from image_ids */}
    </div>
  );
}

export default ListItem;